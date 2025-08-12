import Link from 'next/link'
import React from 'react'

export default function ServicesIndex() {
  const offerings = [
    {
      title: 'nIQ Audit',
      subtitle: 'Measuring your Narrative Intelligence',
      href: '/services/niq-audit',
      copy:
        'A fast diagnostic that establishes your nIQ baseline, maps coherence and gaps, and delivers a practical roadmap.',
    },
    {
      title: 'Narrative Mapping & Strategic Insight',
      subtitle: 'From signals to strategy',
      href: '/services/narrative-mapping',
      copy:
        'A three‑month program to capture signals, build narrative maps, generate insight and inform precise interventions.',
    },
    {
      title: 'Building Narrative Capacity',
      subtitle: 'Cohort‑based enablement',
      href: '/services/building-capacity',
      copy:
        'A deep enablement track that embeds narrative intelligence into teams, tools and decision cycles.',
    },
  ]

  return (
    <section className="px-12 md:px-24 pt-4 md:pt-6 pb-16 md:pb-20 border-t border-black/10 bg-[#f6f3ea]">
      <div>
        <div className="text-[12px] tracking-[0.12em] uppercase text-[#7a7368] mb-6 md:mb-8">What we offer</div>
        <h1 className="text-[clamp(28px,5vw,52px)] leading-[1.12] text-[#111] mb-8">
          Services
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {offerings.map((o) => (
            <div key={o.href} className="xl:col-span-4">
              <div className="h-full rounded-[12px] border border-black/15 bg-white/60 p-6 flex flex-col">
                <div className="text-[13px] uppercase tracking-wide text-[#7a7368] mb-1">{o.subtitle}</div>
                <h2 className="text-[22px] font-semibold text-[#111] mb-2">{o.title}</h2>
                <p className="text-[16px] text-[#2b2b2b] leading-relaxed mb-4 flex-1">{o.copy}</p>
                <Link
                  href={o.href}
                  className="inline-flex items-center gap-1 text-[16px] font-medium text-[#111] opacity-80 hover:opacity-100 underline underline-offset-4 decoration-black/30 hover:decoration-black transition"
                  id={o.href.split('/').pop()}
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

