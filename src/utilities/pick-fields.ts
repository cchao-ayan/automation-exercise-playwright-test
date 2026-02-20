export function pickFields(obj: any, fields: string[]) {
  const result: any = {};

  for (const field of fields) {
    let value = obj[field];
    if (field === 'id' && value != null) {
      value = String(value);           // number → string
    }
    result[field] = value;
  }

  return result;
}