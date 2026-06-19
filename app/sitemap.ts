import { serviceContentBySlug } from '@/lib/service-content'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aexvora.com').replace(/\/$/, '')
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...Object.values(serviceContentBySlug).map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
