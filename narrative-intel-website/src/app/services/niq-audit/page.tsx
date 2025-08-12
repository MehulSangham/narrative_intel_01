import Link from 'next/link'
import React from 'react'

export default function NiqAuditPage() {
  return (
    <section className="px-12 md:px-24 pt-4 md:pt-6 pb-16 md:pb-20 border-t border-black/10 bg-[#f6f3ea]">
      <div>
        <div className="text-[12px] tracking-[0.12em] uppercase text-[#7a7368] mb-6 md:mb-8">Service</div>
        <h1 className="text-[clamp(28px,5vw,52px)] leading-[1.12] text-[#111] mb-4">nIQ Audit</h1>
        <p className="text-[18px] text-[#2b2b2b] leading-relaxed max-w-[72ch] mb-8">
          A fast diagnostic that establishes your nIQ baseline, maps coherence and gaps, and delivers a practical
          roadmap to increase your organization’s narrative intelligence.
        </p>

        <div className="rounded-[12px] border border-black/15 p-6 bg-white/50 mb-8">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-2">Outcomes</div>
          <ul className="list-disc pl-6 text-[16px] text-[#2b2b2b] space-y-1">
            <li>nIQ baseline and maturity profile</li>
            <li>Coherence map and priority gaps</li>
            <li>Roadmap with next‑quarter actions</li>
          </ul>
        </div>

        <div className="rounded-[12px] border border-black/15 p-6 bg-white/50 mb-8">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-2">Process</div>
          <ol className="list-decimal pl-6 text-[16px] text-[#2b2b2b] space-y-1">
            <li>Discovery: goals, data inventory, interviews</li>
            <li>Sense & Map: signal capture and narrative mapping</li>
            <li>Report & Roadmap: findings, priorities, next steps</li>
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

