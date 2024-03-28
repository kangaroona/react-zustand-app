import { useState } from "react";
import "./App.css";
import { Button } from "@/components/Button/Button";
import { Text } from "@/components/Button/Text";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  const [count, setCount] = useState<number>(5);
  return (
    <>
      <Text />
      <Button vote={count} />
      <Suggestion />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
