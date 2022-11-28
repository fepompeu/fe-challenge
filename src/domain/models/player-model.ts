import { GameModel } from '.'

export type PlayerModel = {
  id: number
  firstName: string
  lastName: string
  gamesWon: GameModel[]
  gamesLose: GameModel[]
}
