import { create } from 'zustand';

export interface Magnet {
  id: string;
  word: string;
  status: 'bank' | 'fridge';
  x: number;
  y: number;
}

interface MagnetStore {
  magnets: Magnet[];
  updateMagnet: (id: string, updates: Partial<Pick<Magnet, 'status' | 'x' | 'y'>>) => void;
  loadExpansionPack: () => Promise<void>;
}

const STARTER_WORDS = [
  'summer',
  'night',
  'is',
  'hot',
  'and',
  'code',
  'bug',
  'beautiful',
];
const EXPANSION_WORDS = [
  'warm',
  'breeze',
  'moon',
  'stars',
  'glow',
  'dream',
  'poem',
  'softly',
];

const createMagnet = (word: string): Magnet => ({
  id: crypto.randomUUID(),
  word,
  status: 'bank',
  x: 0,
  y: 0,
});

const initialMagnets = STARTER_WORDS.map(createMagnet);

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: initialMagnets,

  updateMagnet: (id, updates) => {
    set((state) => ({
      magnets: state.magnets.map((magnet) =>
        magnet.id === id ? { ...magnet, ...updates } : magnet,
      ),
    }));
  },

  loadExpansionPack: async () => {
    // Simulate a network request before adding new words to the bank.
    await new Promise((resolve) => setTimeout(resolve, 500));

    set((state) => ({
      magnets: [...state.magnets, ...EXPANSION_WORDS.map(createMagnet)],
    }));
  },
}));
