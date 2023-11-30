import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@/styles/globals.css'

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
      <body className={Pretendard.className}>{children}</body>
    </html>
  )
}
