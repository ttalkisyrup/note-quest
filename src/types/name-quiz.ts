export type BaseResponse<T> = {
  data: T
}
export type PaginationResponse<T> = {
  page: number
  size: number
  data: Array<T>
}

export type PitchName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type PitchNameKorean = '도' | '레' | '미' | '파' | '솔' | '라' | '시'
export type Otave = 1 | 2 | 3 | 4 | 5 | 6
export type Clef = 'bass' | 'treble'
export type Pitch = {
  id: number
  name: PitchName
  octave: Otave
  clef: Clef
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export type GetNameQuizReq = {
  size?: number
}
export type GetNameQuizRes = Array<Pitch>
