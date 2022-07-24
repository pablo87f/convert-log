import { default as axios } from 'axios';

class RetrieveLogService {
  private readonly SUCCESS_STATUS: number = 200;

  constructor(private readonly url: string) {}

  async run(): Promise<string[] | undefined> {
    try {
      const result = await axios.get<string>(this.url);
      if (result && result.status === this.SUCCESS_STATUS) {
        return result.data.split('\n').map((logLine: string) => logLine.trim());
      }
    } catch {
      console.log('Fail on retrieving logs');
    }
    return undefined;
  }
}

export default RetrieveLogService;
