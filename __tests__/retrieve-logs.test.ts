// import App from '../src/app.js';
import RetrieveLogService from '../src/services/retrieve-logs.service.js';

describe('Retrieve Logs', () => {
  const log = console.log;

  beforeEach(() => {
    global.console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    global.console.log = log; // restore original console.log after all tests
  });

  const inputUrl =
    'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt';
  const wrongUrl =
    'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input.txt';

  const expectedLogsResponse = [
    '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2',
    '101|200|MISS|"POST /myImages HTTP/1.1"|319.4',
    '199|404|MISS|"GET /not-found HTTP/1.1"|142.9',
    '312|200|INVALIDATE|"GET /robots.txt HTTP/1.1"|245.1',
  ];

  it('should retrieve logs successfully', async () => {
    const retrieveLogsService = new RetrieveLogService(inputUrl);
    const logs = await retrieveLogsService.run();
    expect(logs.join('')).toBe(expectedLogsResponse.join(''));
  });

  it('should fail on retrieving logs', async () => {
    const retrieveLogsService = new RetrieveLogService(wrongUrl);
    const logs = await retrieveLogsService.run();
    expect(logs).toBeUndefined();
    expect(console.log).toHaveBeenLastCalledWith(`Fail on retrieving logs`);
  });
});
