import { useState,useEffect } from "react";
import  {useStore } from "@/stores/votes";
/**
 * Button component
 *
 * @return {JSX.Element} The button component with vote count and increment/decrement buttons
 */
export function Button({vote}:{vote:number}) {
  const [state,setSt] = useState(vote);
  console.log('vote:',vote);
  const {votes,addVotes,subtractVotes} = useStore();
  function subtractVotesFn(){
    subtractVotes();
    setSt(state-1);
  }
  function addVotesFn(){
    addVotes();
    setSt(state+1);
  }
  useEffect(()=>{
    console.log('useeffect');
    useStore.setState({votes:vote})
  },[vote]);
  return (
      <div>
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
