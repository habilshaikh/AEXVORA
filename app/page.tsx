import { Nav } from '@/components/nav'
import { Experience } from '@/components/experience'

export default function Page() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Nav />
      <Experience />
    </main>
  )
}
