import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";
import './App.css';

const items = ['Chicago', 'Illinois', 'New York'];

function App() {
  return (
    <>
    <ListGroup items={items} heading="Cities"/>
    </>
  );
}

export default App;
