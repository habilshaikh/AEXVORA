'use client'

import { motion } from 'framer-motion'
import {
  Layers,
  Wind,
  Activity,
  Palette,
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
      className={`mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-luxe ${
        dark ? 'text-foreground/60' : 'text-cream/70'
      }`}
    >
      <span className="h-px w-8 bg-primary" />
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
    icon: Layers,
    tag: 'Scene 01',
    title: 'Fabric Innovation',
    body: 'A 4-layer aerospace-grade weave engineered at the molecular level. Lighter than air, stronger than steel-thread cotton — the first fabric born in a lab, not a loom.',
    dark: false,
    align: 'left' as const,
  },
  {
    icon: Wind,
    tag: 'Scene 02',
    title: 'Comfort Technology',
    body: 'Adaptive thermal regulation reads your body in real time. AETHER ONE breathes with you — cooling at 0.3s response, warming on demand. Comfort, finally computed.',
    dark: false,
    align: 'right' as const,
  },
  {
    icon: Activity,
    tag: 'Scene 03',
    title: 'Performance Features',
    body: 'Zero-friction seams. Self-structuring fit memory. A garment that performs like equipment and disappears like a second skin. Movement, re-engineered.',
    dark: true,
    align: 'left' as const,
  },
  {
    icon: Palette,
    tag: 'Scene 04',
    title: 'Customization',
    body: 'Tune fit, finish and chromatics from a single interface. Every AETHER ONE is configured, not bought — a product as personal as the body it serves.',
    dark: true,
    align: 'right' as const,
  },
]

const products = [
  { name: 'AETHER ONE — Cloud', price: '$280', spec: 'Signature Cream' },
  { name: 'AETHER ONE — Ember', price: '$310', spec: 'Soft Orange' },
  { name: 'AETHER ONE — Onyx', price: '$340', spec: 'Espresso Edition' },
]

export function Overlay() {
  return (
    <div className="w-full">
      {/* HERO */}
      <Section align="center">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.18, delayChildren: 0.2 }}
        >
          <motion.div variants={fade} transition={{ duration: 0.8 }}>
            <Kicker>Introducing AETHER ONE</Kicker>
          </motion.div>
          <motion.h1
            variants={fade}
            transition={{ duration: 0.9 }}
            className="text-balance font-serif text-6xl font-light leading-[0.95] text-cream text-glow md:text-8xl lg:text-9xl"
          >
            The T-Shirt,
            <br />
            Reimagined.
          </motion.h1>
          <motion.p
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-8 max-w-md text-pretty text-base leading-relaxed text-cream/70 md:text-lg"
          >
            Not clothing. A breakthrough. The world&apos;s most advanced garment,
            sealed in a capsule until now.
          </motion.p>
          <motion.div
            variants={fade}
            transition={{ duration: 0.9 }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-luxe text-cream/50">
              Scroll to reveal
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* FEATURE SCENES */}
      {features.map((f) => {
        const textTone = f.dark ? 'text-foreground' : 'text-cream'
        const subTone = f.dark ? 'text-foreground/65' : 'text-cream/70'
        const panel = f.dark ? 'frost' : 'frost-dark'
        return (
          <Section key={f.tag} align={f.align}>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className={`${panel} rounded-3xl border border-cream/10 p-8 md:p-10`}
            >
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 ${
                  f.dark ? 'text-primary' : 'text-cream'
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <Kicker dark={f.dark}>{f.tag}</Kicker>
              <h2
                className={`text-balance font-serif text-4xl font-light leading-tight md:text-6xl ${textTone}`}
              >
                {f.title}
              </h2>
              <p className={`mt-5 text-pretty leading-relaxed md:text-lg ${subTone}`}>
                {f.body}
              </p>
            </motion.div>
          </Section>
        )
      })}

      {/* SHOP COLLECTION */}
      <section className="flex min-h-screen w-full snap-start flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-2xl"
        >
          <Kicker dark>Scene 05 — Shop Collection</Kicker>
          <h2 className="text-balance font-serif text-5xl font-light leading-tight text-foreground md:text-7xl">
            Own the future of fabric.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-foreground/65 md:text-lg">
            Three configurations. One revolution. Each AETHER ONE is assembled to
            order and shipped in its signature capsule.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group frost relative overflow-hidden rounded-3xl border border-foreground/10 p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
              <div className="mb-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-luxe text-foreground/50">
                  {p.spec}
                </span>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
                {p.name}
              </h3>
              <div className="mt-8 flex items-end justify-between">
                <span className="text-3xl font-light text-foreground">{p.price}</span>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                  Configure
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-foreground/10 pt-10 text-center md:flex-row md:text-left">
          <span className="font-serif text-xl text-foreground">AETHER</span>
          <p className="text-xs uppercase tracking-luxe text-foreground/50">
            A billion-dollar fashion-tech launch — demo experience
          </p>
          <span className="text-xs text-foreground/50">© 2026 Aether Labs</span>
        </footer>
      </section>
    </div>
  )
}
