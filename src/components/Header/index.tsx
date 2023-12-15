import clsx from 'clsx'
import Logo from '@/assets/svg/logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className={clsx(
        'flex justify-between items-center px-5 h-header',
        'border-b-amber-50 border bg-yellow-50',
      )}
    >
      <Logo height={48} />
      <Link
        href={'/login'}
        className="cursor-pointer px-3 py-2 font-bold text-sm"
      >
        로그인
      </Link>
    </header>
  )
}
