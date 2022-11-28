import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { LoadPlayer } from '@/domain/usecases'
import { LoadPlayerGet } from '@/domain/usecases/load-player'

export class RemoteLoadParticipants implements LoadPlayer {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadPlayerGet>
  ) {}

  async loadAll (): Promise<LoadPlayer.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const participants = httpResponse.body || {}
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Object.keys(participants).map(participantId => ({
        id: +participantId,
        firstName: participants[+participantId]['First Name'],
        lastName: participants[+participantId]['Last Name']
      }))
      default: throw new UnexpectedError()
    }
  }
}
