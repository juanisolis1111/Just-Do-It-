import React, { useState, useEffect } from "react";

const UpdateItemForm = ({ item, onUpdate }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(item.text);
  }, [item]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e);
    // if (text.trim() !== "") {
    //   onUpdate(item.id, text.trim());
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="text" />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItemForm;
