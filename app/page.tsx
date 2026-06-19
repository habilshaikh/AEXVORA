import { Nav } from '@/components/nav'
import { Experience } from '@/components/experience'
import { Overlay } from '@/components/overlay'

export default function Page() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aexvora.com').replace(/\/$/, '')
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aexvora',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Digital marketing, website development, design and consulting services.',
  }

  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }}
      />
      <Experience />
      <Nav />
      <div className="relative z-10">
        <Overlay />
      </div>
    </main>
  )
}
