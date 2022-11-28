export type HttpRequest = {
  url: string
  method: HttpMethod
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'get'

export enum HttpStatusCode {
  ok = 200,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
