import App from './app.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = new App(process.argv);
app.run();
