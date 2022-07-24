class ConvertService {
  constructor(
    private readonly inputUrl: string,
    private readonly outputPath: string,
  ) {}

  async run() {
    console.log(`running convertion: ${this.inputUrl} to ${this.outputPath}`);
  }
}

export default ConvertService;
