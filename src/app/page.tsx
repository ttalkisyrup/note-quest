import Link from 'next/link'

import Header from '@/components/Header'
import Card from '@/components/Card'

export default function RootPage() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col gap-3 justify-center items-center w-full my-5">
          <Link href={'/name-quiz'}>
            <Card title="혼자 연습하기" />
          </Link>
          <Link href={'/name-quiz'}>
            <Card title="혼자 연습하기" color="pink" />
          </Link>
          <Link href={'/name-quiz'}>
            <Card title="대결하기" color="blue" />
          </Link>
        </div>
      </main>
    </>
  )
}
