import { useState } from "react";
function App() {
  const [customer, setCustomer] = useState({
    title: "Americano",
    address: {
      city: 'New York',
      pincode: 94111
    }
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {...customer.address, pincode: 94112}
    });
  }
  return (
    <div> 
      {customer.address.pincode}
      <button onClick={handleClick}> Click me! </button>
    </div>
  );
}
export default App;
