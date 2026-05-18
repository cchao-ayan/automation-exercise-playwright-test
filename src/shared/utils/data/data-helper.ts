import { DataReader } from './data-reader';
import { InvalidSignupFormTestData } from '@features/auth/types/signup-form.type';

export function getUserData(username: string, path: string): InvalidSignupFormTestData | undefined {
  const userData = DataReader.read<InvalidSignupFormTestData>(path);
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