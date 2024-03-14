import { useState, useEffect, useCallback } from "react";
import { useStore } from "@/stores/votes";
/**
 * Button component
 *
 * @return {JSX.Element} The button component with vote count and increment/decrement buttons
 */
interface IButonProps {
  vote: number;
  flag: boolean;
}
export function Button({ vote, flag }: IButonProps) {
  const [state, setSt] = useState(vote);
  const { votes, subtractVotes, insert } = useStore();
  function subtractVotesFn() {
    subtractVotes();
    setSt(state - 1);
  }
  const addVotesFn = useCallback(async () => {
    await insert(vote);
    setSt(state + 1);
  }, [state, vote]);

  useEffect(() => {
    console.log("useeffect");
    useStore.setState({ votes: vote });
  }, [vote]);
  return (
    <div>
      {flag}
      <span>state:{state}</span>
      <br />
      <span>store:{votes}</span>

      <p>
        <button onClick={() => subtractVotesFn()}>-</button>
        <button onClick={() => addVotesFn()}>+</button>
      </p>
    </div>
  );
}
