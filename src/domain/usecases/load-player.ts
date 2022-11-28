export interface LoadPlayer {
  loadAll: () => Promise<LoadPlayer.Model[]>
}

export namespace LoadPlayer {
  export type Model = {
    id: number
    firstName: string
    lastName: string
  }
}

type LoadPlayerGetValue = {
  id: number
  ['First Name']: string
  ['Last Name']: string
}
export type LoadPlayerGet = {
  [key: string]: LoadPlayerGetValue
}
