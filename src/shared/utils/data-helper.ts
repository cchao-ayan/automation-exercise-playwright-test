import { DataReader } from './data-reader';
import { InvalidSignupTestData } from '@features/auth/types/auth.type';

export function getUserData(username: string, path: string): InvalidSignupTestData | undefined {
  const userData = DataReader.read<InvalidSignupTestData>(path);
  return userData.find((row) => row.name?.toLowerCase() === username.toLowerCase()) ?? undefined;
}

export function getFirstSpecialCharacterAfterAt(
  email: string
): string | null {
  const domain = email.split('@')[1];

  if (!domain) {
    return null;
  }

  const match = domain.match(/[^a-zA-Z0-9.-]/);

  return match ? match[0] : null;
}