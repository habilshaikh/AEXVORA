'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Aexvora!%0A%0AMy name is *${formData.name}*.%0AI am interested in: *${formData.service}*%0A%0A${formData.message}`
    window.open(`https://wa.me/919219714827?text=${text}`, '_blank')
    setIsOpen(false)
    setFormData({ name: '', service: '', message: '' })
  }

  return (
    <>
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      {/* Premium Abstract Logo */}
      <a href="#" className="pointer-events-auto flex items-center gap-3 text-white mix-blend-difference transition-opacity hover:opacity-80">
        {/* Yahan src mein apne logo ka naam likh dena */}
        <Image src="/logo.png" alt="Aexvora Logo" width={45} height={45} className="object-contain" />
        <span className="font-serif text-2xl tracking-widest">AEXVORA</span>
      </a>
      <nav className="pointer-events-auto hidden items-center gap-10 text-[11px] font-medium uppercase tracking-widest text-white mix-blend-difference md:flex">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="transition-opacity hover:opacity-60"
        >
          Home
        </a>
        <a 
          href="#services" 
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="transition-opacity hover:opacity-60"
        >
          Services
        </a>
      </nav>
    <button 
      onClick={() => setIsOpen(true)}
        className="pointer-events-auto rounded-full border border-white/40 px-5 py-2 text-[11px] font-medium uppercase tracking-widest text-white mix-blend-difference transition-colors hover:bg-white hover:text-black hover:no-underline"
      >
        Contact Us
    </button>
    </motion.header>

    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-white/5 p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            
            <h2 className="mb-2 font-serif text-3xl font-light text-white">Let's Talk.</h2>
            <p className="mb-8 text-sm text-white/50">Fill out the form below and we'll connect with you on WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-widest text-white/50">Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-widest text-white/50">Service Interested In</label>
                <input required type="text" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10" placeholder="SEO, Google Ads, etc." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-widest text-white/50">Message</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 focus:bg-white/10" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-[11px] font-medium uppercase tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  )
}
