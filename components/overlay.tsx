'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import {
  Search,
  MapPin,
  Target,
  Youtube,
  Linkedin,
  Users,
  MessageSquare,
  Link,
  Package,
  Database,
  FileText,
} from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function Kicker({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`mb-3 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest md:mb-6 ${
        dark ? 'text-white/60' : 'text-white/70'
      }`}
    >
      <span className="h-px w-8 bg-white" />
      {children}
    </span>
  )
}

function Section({
  children,
  align = 'left',
}: {
  children: ReactNode
  align?: 'left' | 'right' | 'center'
}) {
  const justify =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start text-left'

  return (
    <section className="flex min-h-[70vh] w-full snap-start scroll-mt-24 items-center px-6 py-16 md:h-screen md:px-16 md:py-0 lg:px-24">
      <div className={`flex w-full flex-col ${justify}`}>
        <div className="max-w-xl">{children}</div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Search,
    tag: 'Service 01',
    title: 'Search Engine Optimization',
    body: 'Boost your organic visibility and drive targeted traffic. We dominate local and global search results.',
    dark: true,
    align: 'left' as const,
  },
  {
    icon: Target,
    tag: 'Service 02',
    title: 'Google Ads Management',
    body: 'Maximize ROI with data-driven paid search campaigns. Engage audiences with high-converting video ads on YouTube.',
    dark: true,
    align: 'right' as const,
  },
  {
    icon: Users,
    tag: 'Service 03',
    title: 'Influencer Marketing',
    body: 'Amplify your brand voice through strategic partnerships. Scale your sales with a network of performance-based partners.',
    dark: true,
    align: 'left' as const,
  },
  {
    icon: Database,
    tag: 'Service 04',
    title: 'Data Intelligence',
    body: 'Make informed decisions with advanced analytics. Streamline operations with standard operating procedures (SOP).',
    dark: true,
    align: 'right' as const,
  },
]

const allServices = [
  { name: 'Search Engine Optimization (SEO)', icon: Search, spec: 'Organic Growth' },
  { name: 'Local SEO', icon: MapPin, spec: 'Local Dominance' },
  { name: 'Google Ads Management', icon: Target, spec: 'Paid Search' },
  { name: 'YouTube Ads Management', icon: Youtube, spec: 'Video Ads' },
  { name: 'LinkedIn Marketing', icon: Linkedin, spec: 'B2B Leads' },
  { name: 'Influencer Marketing', icon: Users, spec: 'Brand Ambassadors' },
  { name: 'SMS Marketing', icon: MessageSquare, spec: 'Direct Engagement' },
  { name: 'Affiliate Marketing', icon: Link, spec: 'Partner Network' },
  { name: 'Packaging Design', icon: Package, spec: 'Brand Identity' },
  { name: 'Data Intelligence Consulting', icon: Database, spec: 'Analytics' },
  { name: 'SOP Development', icon: FileText, spec: 'Operations' },
]

export function Overlay() {
  return (
    <div id="home" className="w-full text-white">
      <Section align="center">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.18, delayChildren: 0.2 }}
        >
          <motion.div variants={fade} transition={{ duration: 0.8 }}>
            <Kicker>Aexvora Services & Consulting</Kicker>
          </motion.div>
          <motion.h1
            variants={fade}
            transition={{ duration: 0.9 }}
            className="text-balance font-serif text-6xl font-light leading-[0.95] text-white drop-shadow-2xl md:text-8xl lg:text-9xl"
          >
            Aexvora
            <br />
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text italic text-transparent"
            >
              Excellence.
            </motion.span>
          </motion.h1>
          <motion.p
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-white/70 md:mt-8 md:text-lg"
          >
            Engineered for scale. Reimagined for the modern web. Discover our premium suite of consulting and marketing services.
          </motion.p>
          <motion.div
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mt-8 flex flex-col items-center gap-3 md:mt-12"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/50">
              Scroll to reveal
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="h-10 w-px bg-gradient-to-b from-white to-transparent"
            />
          </motion.div>
        </motion.div>
      </Section>

      {features.map((f, i) => (
        <Section key={f.tag} align={f.align}>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-xl md:rounded-3xl md:p-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white md:mb-6 md:h-12 md:w-12 md:rounded-2xl"
            >
              <f.icon className="h-5 w-5" />
            </motion.div>
            <Kicker dark={f.dark}>{f.tag}</Kicker>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-white md:text-6xl">
              {f.title}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-white/70 md:mt-5 md:text-lg">
              {f.body}
            </p>
            <div className="mt-6 md:mt-8">
              <button
                onClick={() => window.open(`https://wa.me/919219714827?text=Hello Aexvora! I am interested in your ${encodeURIComponent(f.title)} service.`, '_blank')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest text-black transition-transform hover:scale-105"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        </Section>
      ))}

      <section id="about-section" className="flex min-h-[70vh] w-full snap-start scroll-mt-24 flex-col justify-center px-6 py-16 md:min-h-screen md:px-16 md:py-0 lg:px-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Kicker dark>About Us</Kicker>
          <h2 className="text-balance font-serif text-5xl font-light leading-tight text-white md:text-7xl">
            Who we are.
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-white/70 md:mt-5 md:text-lg">
            We are a premium digital agency specializing in search engine optimization, paid media, and strategic marketing. Our goal is to engineer comprehensive digital strategies tailored to scale your business and drive exceptional results.
          </p>
        </motion.div>
      </section>

      <section id="services-section" className="flex min-h-screen w-full snap-start scroll-mt-24 flex-col justify-center px-6 py-12 md:px-16 md:py-24 lg:px-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-8 max-w-2xl md:mb-14"
        >
          <Kicker dark>All Services</Kicker>
          <h2 className="text-balance font-serif text-5xl font-light leading-tight text-white md:text-7xl">
            Elevate your business.
          </h2>
          <p className="mt-3 max-w-lg text-pretty leading-relaxed text-white/65 md:mt-5 md:text-lg">
            A comprehensive suite of digital marketing, design, and consulting services tailored to scale your brand.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {allServices.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-4 backdrop-blur-md md:rounded-3xl md:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-4 flex items-center justify-between md:mb-8">
                <span className="text-[10px] uppercase tracking-widest text-white/50">
                  {p.spec}
                </span>
                <p.icon className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mt-2 font-serif text-lg font-light text-white md:mt-4 md:text-2xl">
                {p.name}
              </h3>
              <div className="mt-4 flex translate-y-0 items-end justify-between opacity-100 transition-all duration-300 md:mt-8 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <div className="flex w-full justify-between gap-2">
                  <NextLink
                    href={`/services/${encodeURIComponent(p.name.toLowerCase().replace(/ /g, '-'))}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    Explore
                  </NextLink>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(`https://wa.me/919219714827?text=Hello Aexvora! I am interested in your ${encodeURIComponent(p.name)} service.`, '_blank')
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-black transition-transform duration-300 hover:scale-105"
                  >
                    Inquire <MessageSquare className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:mt-24 md:flex-row md:gap-6 md:pt-10 md:text-left">
          <div>
            <span className="font-serif text-xl text-white">AEXVORA</span>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
              Premium Services & Consulting
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/45">
            &copy; 2026 Aexvora. Developed by Aexvora.
          </span>
        </footer>
      </section>
    </div>
  )
}
