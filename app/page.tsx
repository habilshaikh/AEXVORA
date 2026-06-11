import { Nav } from '@/components/nav'
import { Experience } from '@/components/experience'
import { Overlay } from '@/components/overlay'

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <Experience />
      <Nav />
      <div className="relative z-10">
        <Overlay />
      </div>
    </main>
  )
}
