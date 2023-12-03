import { PitchName, PitchNameKorean } from '@/types/name-quiz'
import { buttonPropDefs } from '@radix-ui/themes'

export const NOTE_NAME: Array<{
  en: PitchName
  ko: PitchNameKorean
  color: (typeof buttonPropDefs)['color']['default']
}> = [
  { en: 'C', ko: '도', color: 'red' },
  { en: 'D', ko: '레', color: 'orange' },
  { en: 'E', ko: '미', color: 'yellow' },
  { en: 'F', ko: '파', color: 'green' },
  { en: 'G', ko: '솔', color: 'blue' },
  { en: 'A', ko: '라', color: 'iris' },
  { en: 'B', ko: '시', color: 'purple' },
]
