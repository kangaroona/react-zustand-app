import { create } from "zustand";

export interface ISuggestionData {
  isOpen: boolean;
  keyword: string;
  list: string[];
}
const initialState: ISuggestionData = {
  isOpen: false,
  keyword: "",
  list: [],
};
interface ISuggestionAction {
  togglePanel: () => void;
  selectText: (text: string) => void;
  setList: (list: string[]) => void;
  fetchList: (kw: string) => void;
}
const sleep = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
export const useStore = create<ISuggestionData & ISuggestionAction>((set) => ({
  ...initialState,
  togglePanel: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  selectText: (text: string) => {
    set(() => ({ isOpen: false, keyword: text, list: [] }));
  },
  setList: (list: string[]) => {
    set(() => ({ list }));
  },
  async fetchList(kw: string) {
    if (kw.trim() === "") {
      set(() => ({ list: [] }));
      return;
    }
    await sleep(500);
    set((state) => ({ list: [...state.list, kw] }));
  },
}));
