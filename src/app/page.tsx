import Arrow from '@/assets/svg/arrow.svg'
import Link from 'next/link'

export default function RootPage() {
  return (
    <main>
      <div className="flex justify-center items-center w-full my-5">
        <Link href={'/name-quiz'}>
          <div className="flex flex-col w-[300px] bg-eun-yellow rounded-3xl p-6 box-content space-y-6 shadow-card cursor-pointer">
            <div className="flex justify-end">
              <Arrow width={24} height={24} />
            </div>
            <div className="font-bold text-xl">혼자 연습하기</div>
          </div>
        </Link>
      </div>
    </main>
  )
}
