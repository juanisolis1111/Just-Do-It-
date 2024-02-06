import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log("texy", text);

  return (
    <>
      <input
        name="text"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter item text"
      />
      <button type="submit" onClick={() => onAdd(text)}>
        Add Item
      </button>
    </>
  );
};

export default AddItemForm;
