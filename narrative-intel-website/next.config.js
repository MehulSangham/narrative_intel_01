const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  images: {
    domains: ['substackcdn.com', 'substack.com'],
  },
  async redirects() {
    return [
      {
        source: '/insights',
        destination: '/signals',
        permanent: true,
      },
    ]
  },
}

module.exports = withMDX(nextConfig)