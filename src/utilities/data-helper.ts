import { CsvReader } from "./csv-reader";

export function getUserData(username: string, path: string) {
    const userData = CsvReader.readCsv(path);
    return userData.find((row) => row.name.toLowerCase() === username.toLowerCase());
};