import clsx from 'clsx'
import Logo from '@/assets/svg/logo.svg'

export default function Header() {
  return (
    <header
      className={clsx(
        'flex flex-col justify-center px-5 h-header',
        'border-b-amber-50 border bg-yellow-50',
      )}
    >
      <Logo height={48} />
    </header>
  )
}
