import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

const items = ["New York", "Los Angeles", "Chicago", "Texas", "Ohio"];

const hanldeSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={hanldeSelectItem}
      />
    </div>
  );
}

export default App;
