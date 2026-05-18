import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';

export class DataReader {

  public static read<T>(filePath: string): T[] {
    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
      case '.xlsx':
      case '.xls':
        return this.readExcel<T>(filePath);

      case '.csv':
        return this.readCsv<T>(filePath);

      default:
        throw new Error(`Unsupported file format: ${ext}`);
    }
  }

  private static readExcel<T>(filePath: string): T[] {
    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0];

    if (!sheetName) {
      throw new Error('Excel file contains no sheets.');
    }

    const sheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json<T>(sheet);
  }

  private static readCsv<T>(filePath: string): T[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    }) as T[];
  }
}