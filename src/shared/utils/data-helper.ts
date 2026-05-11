import { DataReader } from './data-reader';
import { InvalidSignupTestData } from '@features/auth/types/auth.type';

export function getUserData(username: string, path: string): InvalidSignupTestData | undefined {
  const userData = DataReader.read<InvalidSignupTestData>(path);
  return userData.find((row) => row.name?.toLowerCase() === username.toLowerCase()) ?? undefined;
}
