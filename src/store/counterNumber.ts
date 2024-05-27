import { create } from "zustand";

export type counter = {
  user: {name: string}[];
  actions: {
    // incr: () => void;
    // decr: () => void;
    // incrByNumber: (number: number) => void;
    add: (user: string) => void;
  };
};

export const userStore = create<counter>((set) => ({
  user: [
    {name: "mohammad"}
  ],
  actions: {
    // incr: () => set((state: counter) => ({ count: state.count + 1 })),
    // decr: () => set((state: counter) => ({ count: state.count - 1 })),
    // incrByNumber: (number) => set((state: counter) => ({ count: state.count + number }))
    add: (newuser) => set((state: counter) => ({user: [...state.user, {name: newuser}]}))
  },
}));
