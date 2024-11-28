import { MouseEvent } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

const handleOnButtonClick = (event: MouseEvent) => {
console.log(event);
}

function App() {
  return (
    <div>
      <Buttons onButtonClick={handleOnButtonClick} color="primary">
        Primary Button
      </Buttons>
    </div>
  );
}

export default App;
