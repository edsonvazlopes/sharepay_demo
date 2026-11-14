/**
 * Exemplo ilustrativo simplificado.
 * Este arquivo não corresponde à implementação utilizada em produção.
 */

import type { FormEvent } from "react";

type AmountFormProps = {
  isSubmitting?: boolean;
  onSubmit: (data: { title: string; amount: string }) => void;
};

export function AmountForm({ isSubmitting = false, onSubmit }: AmountFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") ?? "").trim();
    const amount = String(formData.get("amount") ?? "").trim();

    if (title && amount) {
      onSubmit({ title, amount });
      event.currentTarget.reset();
    }
  }

  return (
    <form aria-label="Create financial entry" onSubmit={handleSubmit}>
      <label htmlFor="entry-title">Title</label>
      <input id="entry-title" name="title" type="text" required disabled={isSubmitting} />

      <label htmlFor="entry-amount">Amount</label>
      <input id="entry-amount" name="amount" type="text" inputMode="decimal" required disabled={isSubmitting} />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
