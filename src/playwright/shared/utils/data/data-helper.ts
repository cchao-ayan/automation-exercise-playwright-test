import { DataReader } from './data-reader';

/**
 * Reads user data from a file and returns the first row matching the provided field/value pair.
 * Supports case-insensitive comparison for string values.
 */
export function getFieldValue<T extends Record<string, unknown>>(
  field: string,
  value: unknown,
  path: string
): T | undefined {
  const userData = DataReader.read<T>(path);

  return userData.find((row) => {
    const cell = row[field];

    if (typeof cell === 'string' && typeof value === 'string') {
      return cell.toLowerCase() === value.toLowerCase();
    }

    return cell === value;
  });
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