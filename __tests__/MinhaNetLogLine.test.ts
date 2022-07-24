import MinhaNetLogLine from '../src/entities/MinhaNetLogLine.js';

describe('MinhaNetLogLine tests', () => {
  it('should build MinhaNetObject', async () => {
    const minhaNetLogLine = new MinhaNetLogLine(
      '312',
      '200',
      'HIT',
      `GET /robots.txt HTTP/1.1`,
      '100.2',
    );
    expect(minhaNetLogLine.responseSize).toBe(312);
    expect(minhaNetLogLine.statusCode).toBe(200);
    expect(minhaNetLogLine.cacheStatus).toBe('HIT');
    expect(minhaNetLogLine.httpMethod).toBe('GET');
    expect(minhaNetLogLine.uriPath).toBe('/robots.txt');
    expect(minhaNetLogLine.timeTaken).toBe(100);
  });
});
