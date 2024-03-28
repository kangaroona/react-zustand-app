import { useState, useCallback, useLayoutEffect } from "react";
import { useStore } from "@/stores/votes";
/**
 * Button component
 *
 * @return {JSX.Element} The button component with vote count and increment/decrement buttons
 */

export function Button({ vote }: { vote: number }) {
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

  useLayoutEffect(() => {
    console.log("useeffect");
    useStore.setState({ votes: vote });
  }, []);
  return (
    <div>
      <h2>Button component</h2>
      <p>
        <button onClick={() => subtractVotesFn()}>-</button>
        <span>button store:{votes}</span>
        <button onClick={() => addVotesFn()}>+</button>
      </p>
    </div>
  );
}
