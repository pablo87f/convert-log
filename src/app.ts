// import ConvertService from './services/convert.service.js';

class App {
  constructor(private readonly args: string[]) {}
  async run() {
    if (this.args && this.args[2] && this.args[3]) {
      // const url = this.args[2] as string;
      // const path = this.args[3] as string;
      // const convertService = new ConvertService(url, path);
      // await convertService.run();
      console.log('Application running');
    } else {
      console.log(
        'Invalid command. The expected command should follow the pattern: "convert $inputUrl $outputPath"',
      );
    }
  }
}
export default App;
