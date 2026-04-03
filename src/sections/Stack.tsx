import styles from "@/sections/Stack.module.css";

const frontend = [
	"React",
	"TypeScript",
	"JavaScript",
	"Next.js",
	"Redux",
	"Tailwind",
	"SASS/SCSS",
	"React Native",
	"Figma",
	"Storybook",
	"Vite",
	"OAuth",
	"Jest",
	"React Testing Library",
];
const backend = [
	"Node.js",
	"Express",
	"MongoDB",
	"Redis",
	"PostgreSQL",
	"Python",
	"Go",
];
const other = [
	"Docker",
	"GitHub Actions",
	"Agile / Scrum",
	"Git",
	"WebSockets",
	"GraphQL",
];

export default function Stack() {
	return (
		<section id='stack' className={styles.section}>
			<div className={styles.grid}>
				<div className={styles.left}>
					<p className={styles.eyebrow}>Skills</p>
					<h2 className={styles.heading}>Tech stack.</h2>

					<div className={styles.group}>
						<p className={styles.groupLabel}>Frontend</p>
						<div className={styles.pills}>
							{frontend.map((t) => (
								<span key={t} className={styles.pill}>
									{t}
								</span>
							))}
						</div>
					</div>
					<div className={styles.group}>
						<p className={styles.groupLabel}>Backend</p>
						<div className={styles.pills}>
							{backend.map((t) => (
								<span key={t} className={styles.pill}>
									{t}
								</span>
							))}
						</div>
					</div>
					<div className={styles.group}>
						<p className={styles.groupLabel}>Tooling & other</p>
						<div className={styles.pills}>
							{other.map((t) => (
								<span key={t} className={styles.pill}>
									{t}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<p className={styles.eyebrow}>Experience</p>
					<h2 className={styles.heading}>10+ years of UI engineering.</h2>
					<p className={styles.body}>
						I've worked in teams of 4 to 30+, as an independent contractor and
						as an embedded engineer. At Koddi I was part of fast-moving,
						responsive team building custom features for users of the Koddi Ads
						platform by writing high-quality, robust code with minimal specs and
						short turnaround times. At DigiCert I built internal UI tooling,
						client-facing platforms, and a proprietary component library. At
						Mozilla I developed new features and resolved critical issues for
						the Monitor security platform.
					</p>
					<p className={styles.body}>
						I bring proactivity, clear communication, and a commitment to code
						quality that scales — as comfortable in a design review as in a code
						review.
					</p>
					<a
						href='/resume.pdf'
						className={styles.resumeBtn}
						target='_blank'
						rel='noopener noreferrer'
					>
						View resume →
					</a>
				</div>
			</div>
		</section>
	);
}
