import { format } from 'date-fns';
import AgoraLogLine, { HttpMethod } from '../entities/AgoraLogLine.js';

class ConvertLogsService {
  constructor(private readonly logLines: string[]) {}

  async run() {
    if (this.logLines) {
      const minhaNetLogLines = this.logLines
        .filter((line) => line.length > 0)
        .map((line) => {
          const [responseSize, statusCode, cacheStatus, endpoint, timeTaken] =
            line.split('|');
          const [httpMethod, uriPath] = endpoint.replace(/"/g, '').split(' ');

          return {
            responseSize: parseInt(responseSize),
            statusCode: parseInt(statusCode),
            cacheStatus:
              cacheStatus === 'INVALIDATE' ? 'REFRESH_HIT' : cacheStatus,
            httpMethod: httpMethod as HttpMethod,
            uriPath,
            timeTaken: Math.round(parseFloat(timeTaken)),
          };
        });

      const agoraLogLines = minhaNetLogLines.map(
        ({
          cacheStatus,
          httpMethod,
          responseSize,
          statusCode,
          timeTaken,
          uriPath,
        }) => {
          return new AgoraLogLine(
            'MINHA CDN',
            httpMethod,
            statusCode,
            uriPath,
            timeTaken,
            responseSize,
            cacheStatus,
          );
        },
      );

      const version = `#Version: 1.0\n`;
      const date = `#Date: ${format(new Date(), 'dd/MM/yyyy HH:mm:ss')}\n`;
      const fields = `#Fields: provider http-method status-code uri-path time-taken response-size cache-status\n`;
      const header = `${version}${date}${fields}`;

      return `${header}${agoraLogLines.join('\n')}`;
    }
    return undefined;
  }
}

export default ConvertLogsService;
