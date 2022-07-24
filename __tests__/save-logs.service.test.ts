import SaveLogsService from '../src/services/save-logs.service.js';

describe('Retrieve Logs', () => {
  const log = console.log;

  beforeEach(() => {
    global.console.log = jest.fn();
  });
  afterAll(() => {
    global.console.log = log;
  });

  const targetPath = './output/minhaCdn1.txt';

  const fakeContentText = [
    '#Version: 1.0',
    `#Date: 15/12/2017 23:01:06`,
    `#Fields: provider http-method status-code uri-path time-taken response-size cache-status`,
    `"MINHA CDN" GET 200 /robots.txt 100 312 HIT`,
    `"MINHA CDN" POST 200 /myImages 319 101 MISS`,
    `"MINHA CDN" GET 404 /not-found 143 199 MISS`,
    `"MINHA CDN" GET 200 /robots.txt 245 312 REFRESH_HIT`,
  ].join('\n');

  it('should save logs successfully', async () => {
    const saveLogsService = new SaveLogsService(targetPath, fakeContentText);
    saveLogsService.run();
    expect(console.log).toHaveBeenLastCalledWith(
      `Logs saved on "file:${targetPath}`,
    );
  });
});
