export type Entry = {
  tip: number;
  gender: string;
  age: string;
  race: string;
  group: string;
  goldChain: boolean;
  carryingBag: boolean;
  bald: boolean;
  askAbtTs: boolean;
  biggy: boolean;
  buff: boolean;
  britishAccent: boolean;
  italyAccent: boolean;
};

export const entries: Entry[] = [];

export const addEntry = (entry: Entry) => {
  entries.push(entry);
};