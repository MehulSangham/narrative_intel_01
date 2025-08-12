'use client'

import React from 'react'

type HeroFigureProps = {
  accent: string
  kicker?: string
  title: string
  subtitle?: string
  credit?: string
  children?: React.ReactNode // image/content slot
  fullHeight?: boolean
  frame?: boolean
}

export function HeroFigure({ accent, kicker = 'Feature', title, subtitle, credit, children, fullHeight = false, frame = true }: HeroFigureProps) {
  return (
    <figure className="w-full h-full flex flex-col lg:justify-end">
      <div className={`relative ${frame ? 'rounded-[12px] overflow-hidden border border-black/15 bg-white' : ''}`} style={{ marginTop: 0 }}>
        <div className={`relative w-full aspect-[16/10] lg:h-full lg:flex-1`}>{children}</div>
        {frame && (
          <div className="pointer-events-none absolute inset-0">
            {/* top-right corner */}
            <span className="absolute right-3 top-3 h-[16px] w-[2px]" style={{ backgroundColor: accent, opacity: 0.35 }} />
            <span className="absolute right-3 top-3 h-[2px] w-[16px]" style={{ backgroundColor: accent, opacity: 0.35 }} />
            {/* bottom-left corner */}
            <span className="absolute left-3 bottom-3 h-[16px] w-[2px]" style={{ backgroundColor: accent, opacity: 0.35 }} />
            <span className="absolute left-3 bottom-3 h-[2px] w-[16px]" style={{ backgroundColor: accent, opacity: 0.35 }} />
          </div>
        )}
      </div>
      <figcaption className="mt-2 select-text text-right">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[#7a7368] mb-1">{kicker}</div>
        <div className="text-[16px] font-medium text-[#111] leading-tight">{title}</div>
        {subtitle ? (
          <div className="text-[13px] text-[#6b655c] leading-snug mt-0.5">{subtitle}</div>
        ) : null}
        {credit ? (
          <div className="text-[11px] text-[#9b9489] mt-1">{credit}</div>
        ) : null}
      </figcaption>
    </figure>
  )
}

export default HeroFigure

