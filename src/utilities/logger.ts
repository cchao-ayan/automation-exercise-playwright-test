import path from "path";
import fs from "fs";

export class Logger {
  private static logFilePath = path.resolve('logs', 'test-log.txt');

  private static write(level: string, message: string) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFilePath, formattedMessage, 'utf8');
  }

  static info(message: string) {
    this.write('INFO', message);
  }

  static error(message: string) {
    this.write('ERROR', message);
  }

  static warn(message: string) {
    this.write('WARN', message);
  }
}
