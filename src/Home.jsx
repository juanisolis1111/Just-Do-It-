import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import List from "./Components/List/List";
import AddItemForm from "./Components/AddItemForm/AddItemForm";
import UpdateItemForm from "./Components/UpdateItemForm/UpdateItemForm";

const Home = () => {
  const savedList = JSON.parse(localStorage.getItem("toDoList")) || [];
  const [data, setData] = useState(savedList);

  const handleAddItem = (text) => {
    console.log("handleAddItem", text);
    const newItem = {
      id: Date.now(),
      text,
      isCompleted: false,
      isDeleted: false,
    };
    localStorage.setItem("toDoList", JSON.stringify([...data, newItem]));
    setData([...data, newItem]);
  };

  const handleUpdateItem = (id, newText) => {
    localStorage.setItem(
      "toDoList",
      JSON.stringify(
        data.map((item) => {
          if (item.id === id) {
            return { ...item, text: newText };
          }
          return item;
        })
      )
    );
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (id) => {
    localStorage.setItem(
      "toDoList",
      JSON.stringify(
        data.map((item) => {
          if (item.id === id) {
            return { ...item, isDeleted: true };
          }
          return item;
        })
      )
    );
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, isDeleted: true };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div>
        <h1>Welcome to the beginning of productivity!</h1>
        <AddItemForm onAdd={(text) => handleAddItem(text)} />
        <List
          data={data}
          onDelete={handleDeleteItem}
          onUpdate={handleUpdateItem}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
