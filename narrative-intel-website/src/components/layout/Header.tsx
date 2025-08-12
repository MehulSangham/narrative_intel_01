/* Duplicate broken content removed below; file ends here */
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const pathname = usePathname()

  // Lock body scroll and close on Escape when menu is open
  useEffect(() => {
    setMounted(true)
    let timeoutId: number | undefined
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
      document.body.classList.add('menu-open')
      document.body.classList.remove('menu-closing')
      setIsClosing(false)
      // focus the close button when menu opens
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 0)
      // reveal content after band leads (~450ms)
      const reveal = window.setTimeout(() => setContentVisible(true), 450)
      timeoutId = reveal
    } else {
      document.body.classList.add('menu-closing')
      document.body.classList.remove('menu-open')
      setIsClosing(true)
      // allow exit animation to run, but reduce post-close lag (~0.7s)
      timeoutId = window.setTimeout(() => {
        setContentVisible(false)
        document.body.classList.remove('menu-closing')
        document.body.classList.remove('overflow-hidden')
        setIsClosing(false)
      }, 700)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  // Trap focus within overlay when open
  useEffect(() => {
    if (!isMenuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const overlay = document.getElementById('site-menu-overlay')
      if (!overlay) return
      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault()
          ;(last as HTMLElement).focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          ;(first as HTMLElement).focus()
        }
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isMenuOpen])

  const navigation = [
    { name: 'Data', href: '/data' },
    { name: 'Knowledge', href: '/knowledge' },
    { name: 'Insight', href: '/insight' },
    { name: 'Strategy', href: '/strategy' },
    { name: 'Services', href: '/services' },
    { name: 'Signals', href: '/signals' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-[#f6f3ea] border-b border-black/10">
      <div
        className="grid items-center w-full px-12 md:px-24"
        style={{
          height: '88px',
          gridTemplateColumns: '280px 1fr 240px',
        }}
      >
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center space-x-3 pr-6 lg:pr-8">
          <button
            className={`p-1 ${isMenuOpen ? 'invisible' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu-overlay"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.5} className="text-[#111111]" />
            ) : (
              <Menu size={20} strokeWidth={1.5} className="text-[#111111]" />
            )}
          </button>

          <Link href="/" className="flex items-center space-x-3">
            <div className="w-6 h-6 text-[#111111]">
              <Image 
                src="/logo.svg" 
                alt="Narrative Intelligence Logo" 
                width={24} 
                height={24}
                className="w-full h-full"
              />
            </div>
            <span className="font-semibold text-[17px] tracking-[-0.2px] text-[#111111] whitespace-nowrap">
              Narrative Intelligence
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-10 lg:space-x-14 xl:space-x-16">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative font-semibold text-[17px] tracking-[-0.2px] text-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#111111] after:transition-all hover:after:w-full ${active ? 'after:w-full' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Right: Global + Contact */}
        <div className="hidden md:flex items-center space-x-4 pl-6 lg:pl-8 justify-end">
          <button className="flex items-center space-x-1 text-[14px] font-medium text-[#111111] hover:opacity-80 transition-opacity">
            <span>🌐</span>
            <span>Global</span>
            <ChevronDown size={14} />
          </button>

          <Link 
            href="/contact" 
            className="w-11 h-11 border border-black/10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <Mail size={18} strokeWidth={1.5} className="text-[#111111]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ml-auto ${isMenuOpen ? 'invisible' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} strokeWidth={1.5} className="text-[#111111]" /> : <Menu size={24} strokeWidth={1.5} className="text-[#111111]" />}
        </button>
      </div>

      {/* Full-screen takeover menu */}
      {mounted && (isMenuOpen || isClosing) && createPortal(
        <div
          className={`fixed inset-0 z-[90] ${
            isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          id="site-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="site-menu-title"
        >
          <h2 id="site-menu-title" className="sr-only">Menu</h2>
          {/* dark backdrop */}
          <div
            className={`absolute inset-0 bg-black z-[92] transition-opacity duration-300 ease-out ${
              isMenuOpen || isClosing ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '520ms' : '0ms' }}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Gradient sweep accent */}
          <div className="menu-overlay-sweep" />
          {/* global close control (top-left), highest z to ensure clickability */}
          {isMenuOpen && (
            <button
              ref={closeButtonRef}
              className="fixed top-5 left-12 z-[98] p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} className="text-white" />
            </button>
          )}
          {/* content layer stays visible during closing for smoother exit */}
          {(isMenuOpen || isClosing) && contentVisible && (
            <div className="relative z-[96] h-full w-full">
              <div
                className={`absolute inset-0 flex items-start justify-center pt-20 px-12 md:px-24 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
              >
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-6 space-y-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-white text-[44px] leading-[1.05] font-semibold hover:opacity-80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-12 pt-6">
                      <div className="space-y-3 text-white/85">
                        <Link href="#" className="block hover:opacity-80">Work</Link>
                        <Link href="#" className="block hover:opacity-80">About</Link>
                        <Link href="/services" className="block hover:opacity-80">Services</Link>
                      </div>
                      <div className="space-y-3 text-white/85">
                        <Link href="#" className="block hover:opacity-80">Cue Hub</Link>
                        <Link href="#" className="block hover:opacity-80">Awards</Link>
                        <Link href="#" className="block hover:opacity-80">Careers</Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-6 text-white/90">
                    <p className="text-2xl md:text-[28px] leading-[1.3] max-w-2xl">
                      We’re relentlessly searching for talented and inspiring people to work with. If you’d like to help us make a difference that matters, please get in touch.
                    </p>
                    <Link href="/contact" className="inline-flex items-center h-11 px-5 mt-8 rounded-[6px] bg-white text-[#111] font-semibold text-[16px] hover:opacity-90">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </header>
  )
}