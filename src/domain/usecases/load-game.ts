import { GameModel } from '@/domain/models'

export interface LoadGame {
  loadAll: () => Promise<LoadGame.Model[]>
}

export namespace LoadGame {
  export type Model = {
    winnerId: number
    gamesWon: GameModel[]
    gamesLose: GameModel[]
  }
}

export type LoadGameGetValue = {
  winner_score: number | string
  looser_id: number
  looser_score: number | string
}
export type LoadGameGet = {
  [key: string]: LoadGameGetValue[]
}
