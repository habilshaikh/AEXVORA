'use client'

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
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function Kicker({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest ${
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
  children: React.ReactNode
  align?: 'left' | 'right' | 'center'
}) {
  const justify =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start text-left'
  return (
    <section className="flex h-screen w-full snap-start items-center px-6 md:px-16 lg:px-24">
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
      {/* HERO */}
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
            className="text-balance font-serif text-6xl font-light leading-[0.95] text-white md:text-8xl lg:text-9xl drop-shadow-2xl"
          >
            Aexvora
            <br />
            <span className="italic text-white/50">Excellence.</span>
          </motion.h1>
          <motion.p
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-8 max-w-md text-pretty text-base leading-relaxed text-white/70 md:text-lg"
          >
            Engineered for scale. Reimagined for the modern web. Discover our premium suite of consulting and marketing services.
          </motion.p>
          <motion.div
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mt-12 flex flex-col items-center gap-3"
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

      {/* FEATURE SCENES */}
      {features.map((f) => {
        return (
          <Section key={f.tag} align={f.align}>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10"
            >
              <div
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-white"
              >
                <f.icon className="h-5 w-5" />
              </div>
              <Kicker dark={f.dark}>{f.tag}</Kicker>
              <h2
                className="text-balance font-serif text-4xl font-light leading-tight md:text-6xl text-white"
              >
                {f.title}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed md:text-lg text-white/70">
                {f.body}
              </p>
            </motion.div>
          </Section>
        )
      })}

      {/* SHOP COLLECTION */}
      <section id="services-section" className="flex min-h-screen w-full snap-start flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-2xl"
        >
          <Kicker dark>All Services</Kicker>
          <h2 className="text-balance font-serif text-5xl font-light leading-tight text-white md:text-7xl">
            Elevate your business.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/65 md:text-lg">
            A comprehensive suite of digital marketing, design, and consulting services tailored to scale your brand.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allServices.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-md p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/50">
                  {p.spec}
                </span>
                <p.icon className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-light text-white md:text-2xl mt-4">
                {p.name}
              </h3>
              <div className="mt-8 flex items-end justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <NextLink 
                  href={`/services/${encodeURIComponent(p.name.toLowerCase().replace(/ /g, '-'))}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-black transition-transform duration-300 hover:scale-105"
                >
                  Explore
                  <ArrowUpRight className="h-3 w-3" />
                </NextLink>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-center md:flex-row md:text-left">
          <span className="font-serif text-xl text-white">AEXVORA</span>
          <p className="text-xs uppercase tracking-widest text-white/50">
            Premium Services & Consulting
          </p>
          <span className="text-xs text-white/50">© 2026 Aexvora</span>
        </footer>
      </section>
    </div>
  )
}
