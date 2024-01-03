import Link from 'next/link'

import Header from '@/components/Header'
import Card from '@/components/Card'

export default function RootPage() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col gap-3 justify-center items-center w-full my-5">
          <Link href={'/name-quiz/treble'}>
            <Card title="높은 음자리표 연습하기" />
          </Link>
          <Link href={'/name-quiz/bass'}>
            <Card title="낮은 음자리표 연습하기" color="pink" />
          </Link>
          <Link href={'/name-quiz/battle'}>
            <Card title="대결하기" color="blue" />
          </Link>
        </div>
      </main>
    </>
  )
}
