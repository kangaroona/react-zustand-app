import { useStore } from "@/stores/votes";
import { memo } from "react";

export const Text = memo(function Text() {
  const { votes } = useStore();
  console.log("Text render");
  return (
    <div>
      <h2>Text component</h2>
      <div>store:{votes}</div>
    </div>
  );
});
