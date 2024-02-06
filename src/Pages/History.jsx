const History = ({ deletedItems }) => {
  return (
    <div>
      <h1>Deleted Items</h1>
      {/* {deletedItems.length === 0 ? (
          <p>No items have been deleted.</p>
        ) : (
          <ul>
            {deletedItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        )} */}
    </div>
  );
};

export default History;
