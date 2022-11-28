export class UnexpectedError extends Error {
  constructor () {
    super('Somethings went wrong, try again')
    this.name = 'UnexpectedError'
  }
}
