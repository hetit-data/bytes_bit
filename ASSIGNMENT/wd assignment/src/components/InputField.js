import React, { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Typed Text: {inputValue}</p>
    </div>
  );
};

export default InputField;
