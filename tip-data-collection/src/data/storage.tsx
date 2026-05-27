import { Storage } from '@ionic/storage';

const storage = new Storage();

export const initStorage = async () => {
  await storage.create();
};

export const saveEntry = async (entry: any) => {
  const existing = (await storage.get('entries')) || [];

  existing.push(entry);

  await storage.set('entries', existing);
};

export const getEntries = async () => {
  return (await storage.get('entries')) || [];
};

export const clearEntries = async () => {
  await storage.set('entries', []);
};