import ServicePage from '@/components/page'
import { getServiceContent } from '@/lib/service-content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ServiceRouteProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceContent(slug)

  if (!service) return {}

  return {
    title: service.name,
    description: service.metaDescription,
    keywords: [service.keyword, service.name, 'Aexvora'],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Aexvora`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${service.name} | Aexvora`,
      description: service.metaDescription,
    },
  }
}

export default async function Page({ params }: ServiceRouteProps) {
  const { slug } = await params
  const service = getServiceContent(slug)

  if (!service) notFound()

  return <ServicePage service={service} />
}
