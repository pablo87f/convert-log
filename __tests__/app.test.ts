import App from '../src/app.js';

describe('Start app', () => {
  const log = console.log;

  const inputUrl =
    'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt';
  const outputPath = './output/minhaCdn1.txt';

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
      'Invalid command. The expected command should follow the pattern: "convert $inputUrl $outputPath"',
    );
  });

  it('should initialize the application correctly', async () => {
    const app = new App(['', '', inputUrl, outputPath]);
    await app.run();
    expect(console.log).toHaveBeenLastCalledWith(
      `running convertion: ${inputUrl} to ${outputPath}`,
    );
  });
});
