import { AnnouncementBanner, Nav } from '@/components'
import { Hero, About, Portfolio, Stack, Contact } from '@/sections'

export default function App() {
  return (
    <>
      <AnnouncementBanner />
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
