import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { LoadPlayer } from '@/domain/usecases'
import { RemoteLoadParticipants } from '@/data/usecases'

export const makeLoadParticipants = (): LoadPlayer =>
  new RemoteLoadParticipants(makeApiUrl('/participants'), makeAxiosHttpClient())
