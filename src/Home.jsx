import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import List from "./Components/List/List";
import AddItemForm from "./Components/AddItemForm/AddItemForm";
import UpdateItemForm from "./Components/UpdateItemForm/UpdateItemForm";

const Home = () => {
  const [data, setData] = useState([]);

  const handleAddItem = (text) => {
    console.log("handleAddItem", text);
    const newItem = {
      id: data.length + 1,
      text,
      isCompleted: false,
    };
    console.log("[...data, newItem]", [...data, newItem]);
    setData([...data, newItem]);
  };

  const handleUpdateItem = (id, newText) => {
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
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
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
