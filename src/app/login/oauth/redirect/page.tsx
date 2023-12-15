import { PageProps } from '@/types/common'

export default function OAuthRedirectPage({ params, searchParams }: PageProps) {
  return <div>{JSON.stringify(searchParams)}</div>
}
