import { create } from "zustand";

interface IVoteAction {
  addVotes: () => void;
  subtractVotes: () => void;
  insert: (params: number) => void;
}
const sleep = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
export interface IVoteData {
  votes: number;
}
export const useStore = create<IVoteData & IVoteAction>((set) => ({
  votes: 0,
  addVotes: () =>
    set((state) => {
      return { votes: state.votes + 1 };
    }),
  subtractVotes: () => set((state) => ({ votes: state.votes - 1 })),
  insert: async (data: number) => {
    await sleep(1000);
    set((state) => ({ votes: state.votes + data }));
  },
}));
const unsub = useStore.subscribe(() => {
  console.log("监听 useStore 被触发了");
  console.log(useStore.getState());
});
export const unSubscribeCount = () => {
  // 取消订阅
  console.log("unsubscribe");
  unsub();
};
