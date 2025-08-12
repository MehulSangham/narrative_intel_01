'use client'

import React from 'react'
import Link from 'next/link'
import { Search, Map, Target } from 'lucide-react'

export function HowWeWork() {
  return (
    <section className="px-12 md:px-24 pt-4 md:pt-6 pb-16 md:pb-20 border-t border-black/10 bg-[#f6f3ea]">
      <div>
        {/* Eyebrow */}
        <div className="text-[12px] tracking-[0.12em] uppercase text-[#7a7368] mb-6 md:mb-8">How we work</div>

        {/* Lead statement (mobile/tablet only) */}
        <h2 className="xl:hidden text-[clamp(22px,4.6vw,40px)] leading-[1.18] text-[#111] mb-6">
          From signals to strategy: Sense → Map → Act
        </h2>

        {/* Three-step rail */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          <div className="xl:col-span-4">
            <div className="h-full rounded-[12px] border border-black/15 bg-white/60 p-6">
              <Search size={20} className="text-[#111] mb-3" />
              <h3 className="text-[20px] font-semibold text-[#111] mb-2">Sense</h3>
              <p className="text-[16px] text-[#2b2b2b] leading-relaxed mb-3">
                Capture signals across media, stakeholders and internal knowledge to surface meaningful patterns.
              </p>
              <ul className="text-[14px] text-[#555] list-disc pl-5 mb-3">
                <li>Signals feed + baseline snapshot</li>
              </ul>
              <Link href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition">
                See an example <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="xl:col-span-4">
            <div className="h-full rounded-[12px] border border-black/15 bg-white/60 p-6">
              <Map size={20} className="text-[#111] mb-3" />
              <h3 className="text-[20px] font-semibold text-[#111] mb-2">Map</h3>
              <p className="text-[16px] text-[#2b2b2b] leading-relaxed mb-3">
                Structure meaning into metaphors, frames and networks. Build narrative maps and hypotheses.
              </p>
              <ul className="text-[14px] text-[#555] list-disc pl-5 mb-3">
                <li>Narrative map + insight brief</li>
              </ul>
              <Link href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition">
                See an example <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="xl:col-span-4">
            <div className="h-full rounded-[12px] border border-black/15 bg-white/60 p-6">
              <Target size={20} className="text-[#111] mb-3" />
              <h3 className="text-[20px] font-semibold text-[#111] mb-2">Act</h3>
              <p className="text-[16px] text-[#2b2b2b] leading-relaxed mb-3">
                Design interventions, track narrative shift and iterate in short decision cycles.
              </p>
              <ul className="text-[14px] text-[#555] list-disc pl-5 mb-3">
                <li>Intervention playbook + shift metrics</li>
              </ul>
              <Link href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition">
                See an example <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline band */}
        <div className="mt-10 rounded-[12px] border border-black/15 p-5 bg-white/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-1">Discovery</div>
              <div className="text-[16px] text-[#111] mb-1">2–3 weeks</div>
              <div className="text-[14px] text-[#555]">Goals, data inventory, baselines, POV</div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-1">Build</div>
              <div className="text-[16px] text-[#111] mb-1">4–8 weeks</div>
              <div className="text-[14px] text-[#555]">Pipelines, maps, insight sprints, first interventions</div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-[#7a7368] mb-1">Operate</div>
              <div className="text-[16px] text-[#111] mb-1">Ongoing</div>
              <div className="text-[14px] text-[#555]">Briefs, decision support, shift metrics, iteration</div>
            </div>
          </div>
        </div>

        {/* Subtle CTA band */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services#niq-audit" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition">
            See the nIQ Audit <span aria-hidden>→</span>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition">
            Book a working session <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

