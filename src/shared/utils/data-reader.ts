import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';

export class DataReader {
  static read(filePath: string): any[] {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.xlsx' || ext === '.xls') {
      return this.readExcel(filePath);
    }
    if (ext === '.csv') {
      return this.readCsv(filePath);
    }
    throw new Error(`Unsupported file format: ${ext}`);
  }

  static readExcel(filePath: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; 
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
  }
  static readCsv(filePath: string): any[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
    return records;
  }
}
