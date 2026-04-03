import { Nav } from '@/components'
import { Hero, About, Portfolio, Stack, Contact } from '@/sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
