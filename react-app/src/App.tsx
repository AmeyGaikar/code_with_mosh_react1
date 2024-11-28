import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [createAlert, setCreateAlert] = useState(0);

  console.log(createAlert);

  return (
    <>
      {createAlert >= 1 && <Alert onAlertClick={() => {setCreateAlert(0)}}> Alert </Alert>}
      <Buttons onButtonClick={()=> {setCreateAlert(1)}}>My Button</Buttons>
    </>
  );
}

export default App;
