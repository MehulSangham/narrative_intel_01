import Link from 'next/link'
import React from 'react'

export default function NarrativeMappingPage() {
  return (
    <section className="px-12 md:px-24 pt-4 md:pt-6 pb-16 md:pb-20 border-t border-black/10 bg-[#f6f3ea]">
      <div>
        <div className="text-[12px] tracking-[0.12em] uppercase text-[#7a7368] mb-6 md:mb-8">Service</div>
        <h1 className="text-[clamp(28px,5vw,52px)] leading-[1.12] text-[#111] mb-4">Narrative Mapping & Strategic Insight</h1>
        <p className="text-[18px] text-[#2b2b2b] leading-relaxed max-w-[72ch] mb-8">
          A three‑month program to capture signals, build narrative maps, generate insight and inform precise
          interventions that move the needle.
        </p>

        <div className="rounded-[12px] border border-black/15 p-6 bg-white/50 mb-8">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-2">Outcomes</div>
          <ul className="list-disc pl-6 text-[16px] text-[#2b2b2b] space-y-1">
            <li>Live signal feeds and narrative maps</li>
            <li>Insight briefs tied to decisions</li>
            <li>Designed interventions with measurement</li>
          </ul>
        </div>

        <div className="rounded-[12px] border border-black/15 p-6 bg-white/50 mb-8">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-2">Cadence</div>
          <ol className="list-decimal pl-6 text-[16px] text-[#2b2b2b] space-y-1">
            <li>Discovery & goals alignment</li>
            <li>Sense & Map sprints</li>
            <li>Insight & intervention cycles</li>
          </ol>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] underline underline-offset-4 decoration-black/30 hover:decoration-black">
            Book a working session <span aria-hidden>→</span>
          </Link>
          <Link href="/services" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] underline underline-offset-4 decoration-black/30 hover:decoration-black">
            Back to Services <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

