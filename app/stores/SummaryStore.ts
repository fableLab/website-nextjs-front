import { create } from 'zustand'

export type SummaryItem = {
  format: string
  name: string
  id: number
}

type SummaryState = {
  items: SummaryItem[]
  addItem: (format: string, name?: string, id?: number) => void
  clear: () => void
}

export const useSummaryStore = create<SummaryState>((set) => ({
  items: [],
  addItem: (format, name = "", id = 0) =>
    set((state) => ({
      items: [...state.items, { format, name, id }],
    })),
  clear: () => set({ items: [] }),
}))
