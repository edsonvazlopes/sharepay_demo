/**
 * Exemplo ilustrativo simplificado.
 * Este arquivo não corresponde à implementação utilizada em produção.
 */

export type Entry = {
  id: string;
  title: string;
  amountInCents: number;
  createdAt: Date;
};

export type CreateEntryData = {
  title: string;
  amountInCents: number;
};

export interface EntryRepository {
  create(data: CreateEntryData): Promise<Entry>;
  findById(id: string): Promise<Entry | null>;
  listByContainer(containerId: string): Promise<Entry[]>;
}

export class EntryService {
  constructor(private readonly repository: EntryRepository) {}

  async createEntry(data: CreateEntryData): Promise<Entry> {
    const title = data.title.trim();

    if (title.length < 3) {
      throw new Error("Entry title must contain at least 3 characters.");
    }

    if (!Number.isInteger(data.amountInCents) || data.amountInCents <= 0) {
      throw new Error("Entry amount must be a positive integer in cents.");
    }

    return this.repository.create({ title, amountInCents: data.amountInCents });
  }
}
