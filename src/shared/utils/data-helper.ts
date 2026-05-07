import { DataReader } from './data-reader';

export function getUserData(username: string, path: string) {
  const userData = DataReader.read(path);
  return userData.find((row) => row.name.toLowerCase() === username.toLowerCase());
}
