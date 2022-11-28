import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { GameModel } from '@/domain/models'
import { LoadGame, LoadGameGet } from '@/domain/usecases'

export class RemoteLoadGames implements LoadGame {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadGameGet>
  ) {}

  async loadAll (): Promise<LoadGame.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const games = httpResponse.body || {}

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Object.keys(games).map((gameWinner) => {
        const winnerId = +gameWinner

        const winnerGames = games[winnerId]
        const gamesWon = winnerGames.map((game) => ({
          winnerId: winnerId,
          winnerScore: game.winner_score,
          looserId: game.looser_id,
          looserScore: game.looser_score
        }))

        const gamesLose: GameModel[] = []
        Object.keys(games).forEach(index => {
          const currentGame = games[+index]
          currentGame.forEach((item) => {
            if (item.looser_id === winnerId) {
              gamesLose.push({
                winnerId: +index,
                winnerScore: item.winner_score,
                looserId: item.looser_id,
                looserScore: item.looser_score
              })
            }
          })
        })

        return { winnerId, gamesWon, gamesLose }
      })
      default: throw new UnexpectedError()
    }
  }
}
