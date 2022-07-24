import App from '../src/app.js';

describe('Starting app', () => {
  const log = console.log;

  const sourceUrl =
    'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt';
  const targetPath = './output/minhaCdn1.txt';

  beforeEach(() => {
    global.console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    global.console.log = log; // restore original console.log after all tests
  });

  it('should show error message when dont pass the right parameters', async () => {
    const app = new App([]);
    await app.run();
    expect(console.log).toHaveBeenLastCalledWith(
      'Invalid command. The expected command should follow the pattern: "convert $sourceUrl $targetPath"',
    );
  });

  it('should convert the logs and save correctly', async () => {
    const app = new App(['', '', sourceUrl, targetPath]);
    await app.run();
    expect(console.log).toHaveBeenLastCalledWith(
      `Logs saved on "file:${targetPath}`,
    );
  });
});
