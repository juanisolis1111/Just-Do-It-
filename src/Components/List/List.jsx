import { useState } from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ data, onDelete }) => {
  return (
    <>
      {data.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default List;
