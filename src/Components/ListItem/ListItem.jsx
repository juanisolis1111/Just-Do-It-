import React from "react";

const ListItem = ({ item, onDelete }) => {
  return (
    <div>
      <div>{item.text}</div>
      {item.isCompleted && <span> - Completed</span>}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

export default ListItem;
