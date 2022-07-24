import ConvertLogsService from '../src/services/convert-logs.service.js';

class MockDate extends Date {
  constructor() {
    super('2017-12-15T23:01:06.135Z');
  }
}

const OriginalDate = Date;
const OLD_ENV = process.env;

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.Date = MockDate;
  jest.resetModules();
  process.env = { ...OLD_ENV, APP_VERSION: '1.0' };
});
afterAll(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.Date = OriginalDate;
  process.env = OLD_ENV;
});

describe('Convert Logs', () => {
  const logLines = [
    '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2',
    '101|200|MISS|"POST /myImages HTTP/1.1"|319.4',
    '199|404|MISS|"GET /not-found HTTP/1.1"|142.9',
    '312|200|INVALIDATE|"GET /robots.txt HTTP/1.1"|245.1',
  ];
  const expectedConvertedLog = [
    '#Version: 1.0',
    `#Date: 15/12/2017 23:01:06`,
    `#Fields: provider http-method status-code uri-path time-taken response-size cache-status`,
    `"MINHA CDN" GET 200 /robots.txt 100 312 HIT`,
    `"MINHA CDN" POST 200 /myImages 319 101 MISS`,
    `"MINHA CDN" GET 404 /not-found 143 199 MISS`,
    `"MINHA CDN" GET 200 /robots.txt 245 312 REFRESH_HIT`,
  ];

  it('should convert log lines successfully', async () => {
    const convertLogsService = new ConvertLogsService(logLines);
    const convertedText = await convertLogsService.run();
    expect(convertedText).toBe(expectedConvertedLog.join('\n'));
  });
});
