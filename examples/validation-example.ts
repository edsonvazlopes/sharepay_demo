/**
 * Exemplo ilustrativo simplificado.
 * Este arquivo não corresponde à implementação utilizada em produção.
 */

type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; errors: string[] };

type CreateEntryInput = {
  title: string;
  amountInCents: number;
};

export function validateCreateEntry(input: unknown): ValidationResult<CreateEntryInput> {
  const errors: string[] = [];

  if (!isRecord(input)) {
    return { ok: false, errors: ["Input must be an object."] };
  }

  const title = input.title;
  const amountInCents = input.amountInCents;

  if (typeof title !== "string" || title.trim().length < 3) {
    errors.push("Title must contain at least 3 characters.");
  }

  if (!Number.isInteger(amountInCents) || amountInCents <= 0) {
    errors.push("Amount must be a positive integer in cents.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: { title: title.trim(), amountInCents } };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
