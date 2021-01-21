export const objectToBuffer = (obj: Record<string, unknown>): Buffer => Buffer.from(JSON.stringify(obj));
