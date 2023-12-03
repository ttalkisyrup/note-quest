import qs from 'query-string'

import API from './base'
import {
  BaseResponse,
  GetNameQuizReq,
  GetNameQuizRes,
  Pitch,
} from '@/types/name-quiz'

const PATH = 'api/v1/pitches'

export const getPitchNames = () => API.get<BaseResponse<Array<Pitch>>>(PATH)

export const getPitchNameQuizRandomSet = ({
  size = 10,
  ...params
}: GetNameQuizReq) =>
  API.get<BaseResponse<GetNameQuizRes>>(
    `${PATH}/quiz?${qs.stringify({ size, ...params })}`,
  )
