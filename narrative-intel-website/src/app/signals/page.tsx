import Link from 'next/link'

const topics = [
  { slug: 'artificial-intelligence', label: 'Artificial Intelligence' },
  { slug: 'climate-change', label: 'Climate Change' },
  { slug: 'political-instability', label: 'Political Instability' },
  { slug: 'economic-inequality', label: 'Economic Inequality' },
  { slug: 'contested-truth', label: 'Contested Truth' },
]

export default function Signals() {
  return (
    <section className="container-x py-16">
      <h1 className="text-4xl font-bold mb-6">Signals</h1>
      <p className="text-neutral-600 mb-10 max-w-2xl">
        Essays and dispatches on data, knowledge, and strategy. Our publication lives on Substack for fast email delivery and membership.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t) => (
          <div key={t.slug} className="border border-black/10 rounded-lg p-5 hover:shadow-sm transition">
            <h2 className="text-xl font-semibold mb-2">{t.label}</h2>
            <p className="text-sm text-neutral-600 mb-4">Explore posts tagged “{t.label}”.</p>
            <Link
              href={`https://signals.narrativeintelligence.systems/tag/${t.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline hover:no-underline"
            >
              View on publication →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="https://signals.narrativeintelligence.systems"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center h-11 px-6 rounded-md border border-black/10 bg-[#111111] text-white hover:bg-black/90"
        >
          Visit the publication
        </Link>
      </div>
    </section>
  )
}