import { ReactNode } from 'react'

export default function NameQuizLayout({ children }: { children: ReactNode }) {
  return <main className="max-w-xl m-auto">{children}</main>
}
