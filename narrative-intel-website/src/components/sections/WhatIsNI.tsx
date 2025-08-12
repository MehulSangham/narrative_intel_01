
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

export function WhatIsNI() {
  return (
    <section className="px-12 md:px-24 pt-4 md:pt-6 pb-16 md:pb-20 border-t border-black/10 bg-[#f6f3ea]">
      <div>
        {/* Eyebrow above both columns; H2 visible on small, hidden on xl */}
        <div className="text-[12px] tracking-[0.12em] uppercase text-[#7a7368] mb-6 md:mb-8">What is Narrative Intelligence?</div>
        <h2 className="text-[clamp(28px,5vw,52px)] leading-[1.12] text-[#111] mb-6 xl:hidden">What is Narrative Intelligence?</h2>

        {/* Grid: label + video left; large text right. Stacked: video then text. */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {/* Video column (equal height on xl) */}
          <div className="xl:col-span-6 order-1 flex">
            <VideoAutoplayTile />
          </div>

          {/* Text column */}
          <div className="xl:col-span-6 order-2 flex flex-col gap-4 md:gap-5">
            <p className="text-[clamp(20px,3.2vw,34px)] leading-[1.25] text-[#111] max-w-none mb-4">
              Narrative Intelligence is the capacity to understand and work with the deep structure of any system,
              whether it be social, political, technological, or ecological.
            </p>
            <p className="text-[17px] md:text-[18px] text-[#2b2b2b] leading-relaxed max-w-none">
              At its core, nIQ reveals what artificial and organic intelligences have in common: they both emerge from
              an information space shaped by meaning and purpose. This semantic space defines how a system perceives,
              organizes, and responds to its environment. By mapping this ‘meaning‑space’ we make visible the
              underlying patterns, potentials, and weaknesses of the system itself. Narrative Intelligence allows us to
              move beyond data and into the logic of system‑level sensemaking: how meaning is constructed, how it
              spreads, and how it changes over time. Through this we allow the system to see itself, and develop
              coherent and effective strategies for evolution. Through this lens, nIQ becomes a powerful pathway for
              developing knowledge capacities that support adaptive, strategic, and system‑aware action.
            </p>
            <div className="mt-3 md:mt-4">
              <Link
                href="/niq"
                className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition"
                aria-label="Learn more: What is your Narrative Intelligence?"
              >
                What is your Narrative Intelligence?
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsNI

function VideoAutoplayTile() {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!el) return
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const playPromise = el.play()
            if (playPromise && typeof playPromise.then === 'function') {
              playPromise.catch(() => {})
            }
          } else {
            el.pause()
          }
        })
      },
      { threshold: [0, 0.5, 1] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full rounded-[12px] overflow-hidden border border-black/15 bg-white aspect-[16/9] xl:aspect-auto xl:h-full">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        controls
        playsInline
        muted
        preload="metadata"
        poster="/images/hero-0.jpg"
      >
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

