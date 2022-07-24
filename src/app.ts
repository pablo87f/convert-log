// import ConvertService from './services/convert.service.js';

import ConvertLogsService from './services/convert-logs.service.js';
import RetrieveLogService from './services/retrieve-logs.service.js';
import SaveLogsService from './services/save-logs.service.js';

class App {
  constructor(private readonly args: string[]) {}
  async run() {
    if (this.args && this.args[2] && this.args[3]) {
      console.log('Application running');
      const sourceUrl = this.args[2] as string;
      const targetPath = this.args[3] as string;

      const retrieveService = new RetrieveLogService(sourceUrl);
      const logLines = await retrieveService.run();

      const convertService = new ConvertLogsService(logLines);
      const convertedLogText = await convertService.run();

      const saveService = new SaveLogsService(targetPath, convertedLogText);
      saveService.run();
    } else {
      console.log(
        'Invalid command. The expected command should follow the pattern: "convert $sourceUrl $targetPath"',
      );
    }
  }
}
export default App;
