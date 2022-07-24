export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

class MinhaNetLogLine {
  private _httpMethod: HttpMethod;
  private _uriPath: string;

  constructor(
    private readonly _responseSize: string,
    private readonly _statusCode: string,
    private readonly _cacheStatus: string,
    private readonly _endpoint: string,
    private readonly _timeTaken: string,
  ) {
    const [httpMethod, uriPath] = this._endpoint.replace(/"/g, '').split(' ');
    this._httpMethod = httpMethod as HttpMethod;
    this._uriPath = uriPath as string;
  }

  public get responseSize(): number {
    return parseInt(this._responseSize, 10);
  }

  public get statusCode(): number {
    return parseInt(this._statusCode);
  }

  public get cacheStatus(): string {
    return this._cacheStatus;
  }

  public get httpMethod(): HttpMethod {
    return this._httpMethod;
  }

  public get uriPath(): string {
    return this._uriPath;
  }

  public get timeTaken(): number {
    return parseInt(this._timeTaken);
  }
}

export default MinhaNetLogLine;
