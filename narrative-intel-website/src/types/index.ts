export interface Service {
  id: string
  title: string
  duration: string
  description: string
  outputs: string[]
  outcomes: string[]
  tiers: ServiceTier[]
}

export interface ServiceTier {
  name: string
  description: string
  price: string
  features?: string[]
}

export interface BlogPost {
  id: string
  title: string
  description: string
  pubDate: string
  link: string
  content: string
  categories: string[]
}

export interface NewsletterSignup {
  email: string
  type: 'newsletter' | 'digest'
  source?: string
}

export interface ContactForm {
  name: string
  email: string
  organization: string
  service: string
  message: string
}