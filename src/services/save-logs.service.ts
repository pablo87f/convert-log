import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

class SaveLogsService {
  constructor(
    private readonly targetPath: string,
    private readonly logsContent: string,
  ) {}

  run() {
    try {
      const dirName = dirname(this.targetPath);

      if (!existsSync(dirName)) {
        mkdirSync(dirName, {
          recursive: true,
        });
      }

      writeFileSync(this.targetPath, this.logsContent);
      console.log(`Logs saved on "file:${this.targetPath}`);
    } catch (e) {
      console.log('Fail on saving logs file');
    }
  }
}

export default SaveLogsService;
