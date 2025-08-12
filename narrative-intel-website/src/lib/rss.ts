import Parser from 'rss-parser'
import { BlogPost } from '@/types'

const parser = new Parser({
  customFields: {
    item: ['description', 'content:encoded']
  }
})

export async function getSubstackPosts(feedUrl: string): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(feedUrl)
    
    return feed.items.map((item, index) => ({
      id: item.guid || `post-${index}`,
      title: item.title || '',
      description: item.description || item.contentSnippet || '',
      pubDate: item.pubDate || '',
      link: item.link || '',
      content: item['content:encoded'] || item.content || '',
      categories: item.categories || []
    }))
  } catch (error) {
    console.error('Error fetching Substack posts:', error)
    return []
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}