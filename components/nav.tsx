'use client'

import { motion } from 'framer-motion'

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <span className="font-serif text-2xl tracking-wide text-cream mix-blend-difference">
        AETHER
      </span>
      <nav className="pointer-events-auto hidden items-center gap-10 text-[11px] font-medium uppercase tracking-luxe text-cream mix-blend-difference md:flex">
        <a href="#" className="transition-opacity hover:opacity-60">
          Technology
        </a>
        <a href="#" className="transition-opacity hover:opacity-60">
          Fabric
        </a>
        <a href="#" className="transition-opacity hover:opacity-60">
          Shop
        </a>
      </nav>
      <button className="pointer-events-auto rounded-full border border-cream/40 px-5 py-2 text-[11px] font-medium uppercase tracking-luxe text-cream mix-blend-difference transition-colors hover:bg-cream hover:text-espresso">
        Reserve
      </button>
    </motion.header>
  )
}
