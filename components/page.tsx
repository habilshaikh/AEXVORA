'use client'

import { Nav } from '@/components/nav'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ServicePage() {
  const params = useParams()
  // Get the slug from URL and format it nicely
  const slug = params?.slug as string || ''
  const serviceName = decodeURIComponent(slug).replace(/-/g, ' ')

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-white/30 font-sans">
      <Nav />
      <div className="container mx-auto px-6 py-32 md:px-16 lg:px-24 md:py-48">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-[11px] font-medium uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="font-cormorant text-5xl font-light tracking-tight sm:text-7xl md:text-8xl capitalize">
          {serviceName}
        </h1>
        <div className="mt-12 h-px w-full max-w-2xl bg-gradient-to-r from-white/20 to-transparent" />
        <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed md:text-xl font-light">
          Elevate your brand with our premium <strong className="font-medium text-white capitalize">{serviceName}</strong> solutions. We engineer comprehensive digital strategies tailored to scale your business and drive exceptional results.
        </p>
        <button 
          onClick={() => window.open(`https://wa.me/919219714827?text=Hello Aexvora! I want to know more about ${encodeURIComponent(serviceName)}`, '_blank')}
          className="mt-12 rounded-full bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-widest text-black transition-transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </main>
  )
}