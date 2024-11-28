import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

const hideUnhideAlert = () => {
  var alertElement = document.getElementById("alert");
  if(alertElement) alertElement.classList.toggle("d-none");

  console.log("Function Triggerd!");
};

const handleOnButtonClick = () => {
  hideUnhideAlert();
};

const handleOnAlertCLick = () => {
  hideUnhideAlert();
};

function App() {
  return (
    <div>
      <Alert onAlertClick={handleOnAlertCLick}>Alert</Alert>

      <Buttons onBtnClick={handleOnButtonClick}>My Button</Buttons>
    </div>
  );
}

export default App;
