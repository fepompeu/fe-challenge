import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { LoadGame } from '@/domain/usecases'
import { RemoteLoadGames } from '@/data/usecases'

export const makeLoadGames = (): LoadGame =>
  new RemoteLoadGames(makeApiUrl('/games'), makeAxiosHttpClient())
