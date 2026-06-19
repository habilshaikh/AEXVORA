import { Nav } from '@/components/nav'
import { serviceContentBySlug, type ServiceContent } from '@/lib/service-content'
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServicePage({ service }: { service: ServiceContent }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black font-serif text-white selection:bg-white/30">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />

      <article className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:px-10 md:pb-32 md:pt-44 lg:px-12">
        <Link href="/#services-section" className="mb-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white sm:mb-10 sm:text-[11px]">
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>

        <header className="max-w-4xl">
          <p className="mb-4 break-words text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300/80 sm:mb-5 sm:text-[11px] sm:tracking-[0.25em]">
            {service.keyword}
          </p>
          <h1 className="break-words text-balance font-serif text-4xl font-light capitalize leading-[0.95] tracking-tight min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-base font-light leading-relaxed text-white/70 sm:mt-8 sm:text-lg md:text-xl">
            {service.intro}
          </p>
        </header>

        <nav aria-label="Page contents" className="mt-10 flex flex-wrap gap-2 border-y border-white/10 py-4 sm:mt-12 sm:gap-3 sm:py-5">
          {['What', 'Why', 'Benefits', 'Process', 'FAQs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full border border-white/15 px-3 py-2 text-[9px] uppercase tracking-widest text-white/65 transition-colors hover:border-white/40 hover:text-white sm:px-4 sm:text-[10px]">
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-14 grid gap-14 sm:mt-20 sm:gap-16 md:mt-28 md:gap-24">
          <section id="what" className="scroll-mt-24 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:gap-10 lg:gap-16">
            <h2 className="break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">What are {service.keyword}?</h2>
            <p className="text-base leading-7 text-white/70 sm:leading-8 md:text-lg">{service.what}</p>
          </section>

          <section id="why" className="scroll-mt-24 grid gap-5 border-t border-white/10 pt-14 md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:pt-24 lg:gap-16">
            <h2 className="break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">Why invest in {service.keyword}?</h2>
            <p className="text-base leading-7 text-white/70 sm:leading-8 md:text-lg">{service.why}</p>
          </section>

          <section id="benefits" className="scroll-mt-24 border-t border-white/10 pt-14 md:pt-24">
            <p className="text-[11px] uppercase tracking-widest text-white/45">Business value</p>
            <h2 className="mt-4 break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">Benefits of {service.name}</h2>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/75 sm:gap-4 sm:p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="leading-7">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="process" className="scroll-mt-24 border-t border-white/10 pt-14 md:pt-24">
            <p className="text-[11px] uppercase tracking-widest text-white/45">How we work</p>
            <h2 className="mt-4 break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">Our {service.name} process</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 sm:p-6">
                  <span className="text-xs text-cyan-300/70">0{index + 1}</span>
                  <h3 className="mt-5 font-serif text-2xl font-light">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-24 border-t border-white/10 pt-14 md:pt-24">
            <p className="text-[11px] uppercase tracking-widest text-white/45">Common questions</p>
            <h2 className="mt-4 break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">{service.name} FAQs</h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10 md:mt-10">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base text-white/90 sm:gap-6 sm:text-lg">
                    {faq.question}
                    <span className="text-2xl font-light text-white/40 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-7 text-white/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="related-services" className="border-t border-white/10 pt-14 md:pt-24">
            <h2 id="related-services" className="font-serif text-3xl font-light sm:text-4xl md:text-5xl">Related services</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.related.map((slug) => {
                const related = serviceContentBySlug[slug]
                if (!related) return null

                return (
                  <Link key={slug} href={`/services/${slug}`} className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.08] sm:p-5">
                    <span className="min-w-0 break-words">{related.name}</span>
                    <ArrowRight className="h-4 w-4 text-white/45 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10 p-5 text-center sm:rounded-3xl sm:p-8 md:p-14">
            <h2 className="break-words font-serif text-3xl font-light sm:text-4xl md:text-5xl">Ready to discuss {service.name}?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">Tell us what you want to achieve. We will help you identify a practical next step for your business.</p>
            <a href={`https://wa.me/919219714827?text=${encodeURIComponent(`Hello Aexvora! I am interested in your ${service.name} service.`)}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-[10px] font-medium uppercase tracking-widest text-black transition-transform hover:scale-105 sm:mt-8 sm:px-7 sm:text-[11px]">
              Start a conversation <MessageCircle className="h-4 w-4" />
            </a>
          </section>
        </div>
      </article>
    </main>
  )
}
