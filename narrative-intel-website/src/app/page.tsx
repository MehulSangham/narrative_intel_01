import React from 'react'
import { HeroCarousel } from '@/components/hero/HeroCarousel'
import { WhatIsNI } from '@/components/sections/WhatIsNI'
import { HowWeWork } from '@/components/sections/HowWeWork'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Exact 1HQ Style from Screenshot */}
      <section className="pt-10 md:pt-14 pb-24 px-12 md:px-24 bg-[#f6f3ea]">
        <HeroCarousel />
      </section>

      {/* Other sections removed per request; homepage micro-CTA to Services */}

      {/* What is Narrative Intelligence? */}
      <WhatIsNI />

      {/* How we work */}
      <HowWeWork />
    </div>
  )
}