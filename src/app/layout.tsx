import type { Metadata } from 'next'
import clsx from 'clsx'
import { Theme } from '@radix-ui/themes'
import Header from '@/components/Header'

import localFont from 'next/font/local'

import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

const Pretendard = localFont({
  src: '../assets/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Note Quest',
  description: '노트퀘스트 | 계이름 연습',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          Pretendard.className,
          'flex min-h-screen flex-col items-center justify-between',
        )}
      >
        <Theme
          accentColor="amber"
          grayColor="sand"
          radius="large"
          className="w-full"
        >
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  )
}
