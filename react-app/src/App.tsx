import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartItem] = useState(['Product1', 'Product2']);
  return (
    <div> 
      <NavBar navbarCount={cartItem.length}/> 
      <Cart onClear={() => setCartItem([])} cartItems={cartItem}/>
    </div>
  );
}
export default App;

