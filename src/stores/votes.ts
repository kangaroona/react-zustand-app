import {create} from 'zustand';
interface IVoteAction{
  addVotes:() => void,
  subtractVotes:() => void,
}
export interface IVoteData{
  votes:number,

}
export const useStore = create<IVoteData & IVoteAction>(set => ({
  votes: 0,
  addVotes: () => set((state) => {console.log(state.votes);return { votes: state.votes + 1 }}),
  subtractVotes: () => set((state) => ({ votes: state.votes - 1 })),
}));
