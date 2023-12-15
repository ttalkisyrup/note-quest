import Link from 'next/link'
import clsx from 'clsx'

import GoogleLogo from '@/assets/svg/google_logo.svg'
import NaverLogo from '@/assets/svg/naver_logo.svg'

const LOGIN_BUTTON_CONFIG =
  'flex items-center justify-center h-12 w-full rounded-2xl gap-1 font-bold text-base'

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center min-h-screen py-20 justify-center gap-20 w-[350px] m-auto text-center">
      <h1 className="text-2xl font-bold">
        내 활동을 보고 싶다면
        <br />
        로그인이 필요해요!
      </h1>
      <div className="flex flex-col space-y-2 px-5 w-full">
        <Link
          href={
            process.env.NEXT_PUBLIC_BASE_API_URL +
            '/oauth2/authorization/google'
          }
        >
          <div
            className={clsx(
              LOGIN_BUTTON_CONFIG,
              'border border-[#E5E5E5] bg-white',
            )}
          >
            <GoogleLogo />
            <span>구글로 시작하기</span>
          </div>
        </Link>
        <Link
          href={
            process.env.NEXT_PUBLIC_BASE_API_URL + '/oauth2/authorization/naver'
          }
        >
          <div className={clsx(LOGIN_BUTTON_CONFIG, 'bg-[#03C75A] text-white')}>
            <NaverLogo />
            <span>네이버로 시작하기</span>
          </div>
        </Link>
      </div>
    </main>
  )
}
