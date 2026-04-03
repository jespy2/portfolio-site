import { useState } from 'react'
import styles from '@/sections/Contact.module.css'
import riverBg from '@/assets/river.jpg'

const WORKER_URL = 'https://contact-form-handler.jespy2.workers.dev/'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s\-()+]{7,20}$/

function validate(form: { name: string; email: string; phone: string; message: string }) {
  const errors: Partial<typeof form> = {}
  if (!EMAIL_RE.test(form.email)) errors.email = 'Enter a valid email address'
  if (form.phone && !PHONE_RE.test(form.phone)) errors.phone = 'Enter a valid phone number'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setIsError(true)
      }
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(f => ({ ...f, [key]: e.target.value }))
      if (errors[key]) setErrors(er => ({ ...er, [key]: undefined }))
    },
  })

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bg} style={{ backgroundImage: `url(${riverBg})` }} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.heading}>
            Let's build something<br />
            <span className={styles.dim}>incredible together.</span>
          </h2>
          <p className={styles.sub}>
            Available for contract and full-time roles.<br />
            Based in Colorado — open to remote.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/jespy2" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub →
            </a>
            <a href="https://linkedin.com/in/jamesespy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn →
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.thanks}>
              <p className={styles.thanksMsg}>Message sent — I'll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    placeholder="Name"
                    required
                    {...field('name')}
                  />
                </div>
                <div className={styles.field}>
                  <input
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    type="email"
                    placeholder="Email"
                    required
                    {...field('email')}
                  />
                  {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
                </div>
              </div>
              <div className={styles.field}>
                <input
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="Phone (optional)"
                  {...field('phone')}
                />
                {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
              </div>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Message"
                required
                {...field('message')}
              />
              {isError && <p className={styles.errorMsg}>Something went wrong — please try again.</p>}
              <button type="submit" className={styles.submit} disabled={isLoading}>
                {isLoading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
