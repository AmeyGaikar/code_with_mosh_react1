
interface CartProp {
    cartItems: string[]
    onClear: () => void
}

const Cart = ({cartItems, onClear}: CartProp) => {
  return (
    <div>
      {cartItems.map(item => <ul> <li key={item}>{item}</li> </ul> )}
      <button onClick={onClear}>Clear Cart</button>
    </div>
  )
}

export default Cart
