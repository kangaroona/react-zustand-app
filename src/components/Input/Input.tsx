import React from "react";

const Input: React.FC<{ text: string; fn: (t: string) => void }> = ({
  text,
  fn,
}) => {
  const chageHandler = (inpVal: string) => {
    fn(inpVal);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => chageHandler(e.target.value)}
      />
    </div>
  );
};

export default Input;
