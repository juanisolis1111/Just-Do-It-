import ListItem from "../components/ListItem/ListItem";

const History = () => {
  const savedList = JSON.parse(localStorage.getItem("toDoList")) || [];
  return (
    <div>
      <h1>Deleted Items</h1>
      {savedList.map((item) => {
        if (item.isDeleted === true) {
          return <ListItem key={item.id} item={item} />;
        }
      })}
    </div>
  );
};

export default History;
