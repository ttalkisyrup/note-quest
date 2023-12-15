import clsx from 'clsx'

import Arrow from '@/assets/svg/arrow.svg'
import { Colors } from '@/styles/types'

interface Props {
  title: string
  tags?: string[]
  color?: keyof Colors['eun']
}

export default function Card({ title, tags, color = 'yellow' }: Props) {
  return (
    <div
      className={clsx(
        `flex flex-col w-[300px] rounded-3xl p-6 box-content space-y-6 shadow-card cursor-pointer`,
        `bg-eun-${color}`,
      )}
    >
      <div className="flex justify-end">
        <Arrow width={24} height={24} />
      </div>
      <div className="font-bold text-xl">{title}</div>
    </div>
  )
}
