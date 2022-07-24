export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

class AgoraLogLine {
  constructor(
    private readonly provider: string,
    private readonly httpMethod: HttpMethod,
    private readonly statusCode: number,
    private readonly uriPath: string,
    private readonly timeTaken: number,
    private readonly responseSize: number,
    private readonly cacheStatus: string,
  ) {}

  toString() {
    return `"${this.provider}" ${this.httpMethod} ${this.statusCode} ${
      this.uriPath
    } ${Math.round(this.timeTaken)} ${this.responseSize} ${this.cacheStatus}`;
  }
}

export default AgoraLogLine;
