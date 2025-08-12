'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroTexture } from './HeroTexture'
import { HeroFigure } from './HeroFigure'
// icons removed from indicators for a minimal dot UI

type Slide = {
  term: string
  ctaText: string
  ctaHref: string
}

const TERMS = [
  'political instability',
  'climate change',
  'artificial intelligence',
  'contested truth',
  'economic inequality',
] as const

const MAX_TERM_CH = TERMS.reduce((m, t) => Math.max(m, t.length), 0)

const SLIDES: Slide[] = TERMS.map((t) => ({
  term: t,
  ctaText: 'About us',
  ctaHref: '/about',
}))

const AUTO_PLAY_MS = 6000

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [labelRotation, setLabelRotation] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [caretVisible, setCaretVisible] = useState(true)
  const [ctaFocused, setCtaFocused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const typeTimerRef = useRef<number | null>(null)
  const caretTimerRef = useRef<number | null>(null)

  // autoplay
  useEffect(() => {
    if (isHovering) return
    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
      setLabelRotation((prev) => (prev + 1) % EYEBROW_ITEMS.length)
    }, AUTO_PLAY_MS)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [index, isHovering])


  // typewriter effect for the term
  useEffect(() => {
    const term = SLIDES[index].term
    // reset text
    setTypedText('')
    // reset effects
    // clear any previous intervals
    if (typeTimerRef.current) window.clearInterval(typeTimerRef.current)
    // typing speed
    const TYPE_MS = 100
    let i = 0
    typeTimerRef.current = window.setInterval(() => {
      i += 1
      setTypedText(term.slice(0, i))
      if (i >= term.length && typeTimerRef.current) {
        window.clearInterval(typeTimerRef.current)
      }
    }, TYPE_MS)
    return () => {
      if (typeTimerRef.current) window.clearInterval(typeTimerRef.current)
    }
  }, [index])

  // blinking caret
  useEffect(() => {
    if (caretTimerRef.current) window.clearInterval(caretTimerRef.current)
    caretTimerRef.current = window.setInterval(() => {
      setCaretVisible((v) => !v)
    }, 500)
    return () => {
      if (caretTimerRef.current) window.clearInterval(caretTimerRef.current)
    }
  }, [])

  const current = SLIDES[index]

  // Eyebrow label rotation: symbols + languages/codes
  const EYEBROW_ITEMS = [
    { text: '👋 🤝 🌐 🧠 📡', mode: 'symbol' },
    { text: '.-- . .-.. -.-. --- -- .', mode: 'morse' },
    { text: 'Welcome', mode: 'english' },
    { text: '欢迎', mode: 'zh' },
    { text: 'स्वागत', mode: 'hi' },
  ] as const
  type EyebrowItem = typeof EYEBROW_ITEMS[number]
  const eyebrowItem: EyebrowItem = EYEBROW_ITEMS[labelRotation % EYEBROW_ITEMS.length]
  const eyebrowLabel = eyebrowItem.text
  const isSymbol = eyebrowItem.mode === 'symbol'
  const isMorse = eyebrowItem.mode === 'morse'
  const COLOR_MAP: Record<string, string> = {
    'contested truth': '#F59E0B', // amber
    'climate change': '#16A34A', // green (original)
    'political instability': '#E24D3A', // coral (anchor)
    'economic inequality': '#B45309', // copper
    'artificial intelligence': '#2563EB', // blue (shared)
  }
  const accentColor = COLOR_MAP[current.term] ?? '#111111'
  // indicator uses minimal dots; icon map no longer needed
  const typeProgress = current.term.length ? Math.min(1, typedText.length / current.term.length) : 1
  const eased = 1 - Math.pow(1 - typeProgress, 3)
  const dynamicWeight = Math.round(500 + eased * 200) // 500→700 as it types
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const eyebrowWeight = prefersReducedMotion ? 550 : Math.round(500 + eased * 100) // 500→600

  const hexToRgba = (hex: string, alpha: number) => {
    const m = hex.replace('#', '')
    const bigint = parseInt(m.length === 3 ? m.split('').map((c) => c + c).join('') : m, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  // Removed baseline rule logic; token itself will carry the accent color

  // Optional per-term images for the right figure
  const TERM_IMAGES: Record<string, string> = {
    'contested truth': '/images/hero-truth.png',
    'climate change': '/images/hero-climate.png',
    'political instability': '/images/hero-political.png',
    'economic inequality': '/images/hero-inequality.png',
    'artificial intelligence': '/images/hero-artificial.png',
  }

  // Optional per-term focal points (object-position). Defaults to center.
  const TERM_OBJECT_POSITION: Record<string, string> = {
    'political instability': '50% 40%',
    'climate change': '50% 50%',
    'economic inequality': '50% 50%',
    'artificial intelligence': '50% 50%',
    'contested truth': '50% 50%',
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        <div
          className="relative max-w-none grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-start xl:items-start"
          style={{ minHeight: 'clamp(480px, 48svh, 640px)' }}
        >
          <div className="relative order-1 xl:order-none xl:col-span-8 2xl:col-span-8 xl:pr-8 2xl:pr-10 z-10 xl:flex xl:flex-col xl:justify-start">
          <div className="mb-6">
            <div className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[8px] rounded-full pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${hexToRgba(accentColor, 0.04)} 20%, ${hexToRgba(accentColor, 0.04)} 80%, rgba(0,0,0,0) 100%)`,
                }}
              />
              <span
                aria-hidden
                className="absolute left-0 right-0 h-[2px] rounded-full"
                style={{
                  bottom: -2,
                  backgroundColor: accentColor,
                  transformOrigin: 'left',
                  transform: `scaleX(${prefersReducedMotion ? 1 : eased})`,
                  transition: 'transform 140ms cubic-bezier(0.22, 1, 0.36, 1)',
                  opacity: 0.9,
                }}
              />
              <p
                className={`relative text-[15px] font-medium leading-[22px] ${isMorse ? 'font-mono tracking-tight' : ''}`}
                style={{ color: accentColor, fontVariationSettings: `"wght" ${eyebrowWeight}`, zIndex: 1 }}
                aria-live="polite"
                aria-label={isSymbol || isMorse ? 'Welcome' : undefined}
                lang={eyebrowItem.mode === 'zh' ? 'zh-CN' : eyebrowItem.mode === 'hi' ? 'hi' : undefined}
              >
                {eyebrowLabel}
              </p>
            </div>
          </div>
          <h1 className="text-[clamp(40px,7vw,92px)] font-bold text-[#111111] tracking-[-1px] leading-[1.02] mb-0 max-w-none">
            <span className="block">
              In a time of{' '}
              <span className="relative font-mono inline-flex items-center align-middle text-[#111]">
                <span
                  key={index}
                  className="px-1.5 py-0.5 inline-flex items-center whitespace-nowrap"
                  style={{
                    fontVariationSettings: `\"wght\" ${dynamicWeight}`,
                    minWidth: `${MAX_TERM_CH + 2}ch`,
                  }}
                >
                  <span style={{ color: accentColor }}>{typedText}</span>
                  <span aria-hidden className="text-[#111]">,</span>
                  <span
                    aria-hidden
                    className="ml-1 inline-block w-[2px] h-[1.15em] bg-[#111]"
                    style={{ opacity: caretVisible ? 1 : 0 }}
                  />
                </span>
              </span>
            </span>
            <span className="block md:whitespace-nowrap">we help you see the</span>
            <span className="block md:whitespace-nowrap">
              <span>signal</span>{' '}
              in the noise.
            </span>
          </h1>
          {/* CTA moved under headline */}
          <div className="mt-6 md:mt-8">
            <Link
              href={current.ctaHref}
              onFocus={() => setCtaFocused(true)}
              onBlur={() => setCtaFocused(false)}
              className="inline-flex items-center h-12 px-6 rounded-[6px] bg-[#111111] text-white font-semibold text-[17px] hover:bg-[#1a1a1a] transition-colors border"
              style={{
                borderColor: accentColor,
                boxShadow: ctaFocused ? `0 0 0 3px ${hexToRgba(accentColor, 0.25)}` : 'none',
              }}
            >
              {current.ctaText}
            </Link>
          </div>
        </div>
        <div
          className="order-2 xl:order-none xl:col-span-4 2xl:col-span-4 w-full mt-10 xl:mt-0 xl:flex xl:flex-col xl:justify-end xl:max-h-full relative z-0"
          style={{ maxHeight: '100%' }}
        >
          <HeroFigure
            accent={accentColor}
            kicker="Feature"
            title={current.term.charAt(0).toUpperCase() + current.term.slice(1)}
            subtitle="A visual exploration of narrative signals"
            credit="Illustration: Narrative Intelligence"
            frame
            overlayCaption
            showCaption={false}
            aspectClass={undefined}
          >
            {TERM_IMAGES[current.term] ? (
              <div className="relative w-full h-full">
                <Image
                  src={TERM_IMAGES[current.term]}
                  alt={`${current.term} visual`}
                  fill
                  sizes="(min-width: 1280px) 420px, 100vw"
                  className={current.term === 'contested truth' ? 'object-cover' : 'object-contain'}
                  style={{ objectPosition: TERM_OBJECT_POSITION[current.term] ?? '50% 50%' }}
                  priority={index === 0}
                />
              </div>
            ) : (
              <HeroTexture color={accentColor} />
            )}
          </HeroFigure>
        </div>
        {/* baseline rule removed; token carries accent color */}
      </div>

      {/* CTA moved into the text column above */}

      {/* Centered simple one-color dots */}
      <div className="mt-5 flex w-full items-center justify-center gap-2.5" role="tablist" aria-label="Topics">
        {SLIDES.map((s, i) => {
          const isActive = i === index
          const neutral = '#7a7368'
          return (
            <button
              key={s.term}
              role="tab"
              aria-selected={isActive}
              aria-label={s.term}
              onClick={() => setIndex(i)}
              className="h-5 w-5 inline-flex items-center justify-center rounded-full focus:outline-none"
            >
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: isActive ? neutral : 'transparent',
                  boxShadow: `inset 0 0 0 1.5px ${neutral}`,
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 160ms ease',
                }}
              />
            </button>
          )
        })}
      </div>

      {/* No manual controls; term changes via autoplay only */}
    </div>
  )
}

export default HeroCarousel

