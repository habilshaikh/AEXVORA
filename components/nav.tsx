'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Aexvora!\n\nMy name is *${formData.name}*.\n\n${formData.message}`
    window.open(`https://wa.me/919219714827?text=${encodeURIComponent(text)}`, '_blank')
    setIsSubmitted(true)
    setFormData({ name: '', message: '' })
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id)
    setIsMenuOpen(false)

    if (section) {
      e.preventDefault()
      section.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <>
    {/* PREMIUM SCROLL PROGRESS BAR */}
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 inset-x-0 h-[3px] z-[100] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
    />

    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 transition-all duration-500 sm:px-6 md:px-8 lg:px-12 ${isScrolled ? 'border-b border-white/10 bg-black/70 py-3 shadow-2xl backdrop-blur-xl sm:py-4' : 'py-4 sm:py-6'}`}
    >
      {/* Premium Abstract Logo */}
      <a href="/#home" onClick={(e) => handleNavigation(e, 'home')} className="pointer-events-auto flex min-w-0 items-center gap-2 text-white mix-blend-difference transition-opacity hover:opacity-80 sm:gap-3">
        {/* Yahan src mein apne logo ka naam likh dena */}
        <Image src="/logo.png" alt="Aexvora Logo" width={48} height={48} className="h-12 w-12 shrink-0 object-contain sm:h-11 sm:w-11" />
        <span className="font-serif text-lg tracking-[0.16em] sm:text-xl sm:tracking-widest lg:text-2xl">AEXVORA</span>
      </a>
      <nav className="pointer-events-auto hidden items-center gap-6 text-[11px] font-medium uppercase tracking-widest text-white mix-blend-difference md:flex lg:gap-10">
        <a
          href="/#home"
          onClick={(e) => handleNavigation(e, 'home')}
          className="transition-opacity hover:opacity-60"
        >
          Home
        </a>
        <a
          href="/#services-section"
          onClick={(e) => handleNavigation(e, 'services-section')}
          className="transition-opacity hover:opacity-60"
        >
          Services
        </a>
        <a
          href="/#about-section"
          onClick={(e) => handleNavigation(e, 'about-section')}
          className="transition-opacity hover:opacity-60"
        >
          About
        </a>
      </nav>
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(false)
            setIsSubmitted(false)
            setIsOpen(true)
          }}
          className="rounded-full border border-white/40 px-3 py-2 text-[9px] font-medium uppercase tracking-widest text-white mix-blend-difference transition-colors hover:bg-white hover:text-black hover:no-underline sm:px-5 sm:text-[11px]"
        >
          Contact <span className="hidden sm:inline">Us</span>
        </button>
      </div>
    </motion.header>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="fixed inset-x-4 top-20 z-40 grid gap-1 rounded-2xl border border-white/10 bg-black/90 p-3 text-center text-sm uppercase tracking-widest text-white shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:top-24 md:hidden"
        >
          <a href="/#home" onClick={(e) => handleNavigation(e, 'home')} className="rounded-xl px-4 py-3 hover:bg-white/10">Home</a>
          <a href="/#services-section" onClick={(e) => handleNavigation(e, 'services-section')} className="rounded-xl px-4 py-3 hover:bg-white/10">Services</a>
          <a href="/#about-section" onClick={(e) => handleNavigation(e, 'about-section')} className="rounded-xl px-4 py-3 hover:bg-white/10">About</a>
        </motion.nav>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="pointer-events-auto relative max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-neutral-950 p-5 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
            >
              <X className="h-4 w-4" />
            </button>
            
            {isSubmitted ? (
              <div className="flex min-h-64 flex-col items-center justify-center text-center sm:min-h-72">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-serif text-5xl font-light tracking-wider text-white sm:text-6xl"
                >
                  TYSM!
                </motion.h2>
                <p className="mt-4 text-sm text-white/50">Your message is ready on WhatsApp.</p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 pr-10 font-serif text-3xl font-light text-white">Let's Talk.</h2>
                <p className="mb-6 text-sm text-white/50 sm:mb-8">Fill out the form below and we'll connect with you on WhatsApp.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50">Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50">Message</label>
                    <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-[11px] font-medium uppercase tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    Send via WhatsApp
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  )
}
