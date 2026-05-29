import { Storage } from '@ionic/storage';
import { Entry } from './entries';

const storage = new Storage();

const normalizeEntry = (entry: Partial<Entry>) => ({
  ...entry,
  cabana: entry.cabana ?? false,
});

export const initStorage = async () => {
  await storage.create();
};

export const saveEntry = async (entry: any) => {
  const existing = (await storage.get('entries')) || [];

  existing.push(normalizeEntry(entry));

  await storage.set('entries', existing);
};

export const getEntries = async () => {
  const entries = (await storage.get('entries')) || [];

  return entries.map((entry: Entry) => normalizeEntry(entry));
};

export const deleteEntry = async (index: number) => {
  const entries = (await storage.get('entries')) || [];

  entries.splice(index, 1);

  await storage.set('entries', entries);
};

export const clearEntries = async () => {
  await storage.set('entries', []);
};