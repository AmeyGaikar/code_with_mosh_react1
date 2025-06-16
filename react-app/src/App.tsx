import React, { useState } from 'react'
import ProductList from './components/ProductList'

const App = () => {
 const [category, setCategory]  = useState('');

  return (
    <div>
      <select  className="form-select" onChange={(event) => setCategory(event.target.value)}>  
      <option value=""></option>
      <option value="clothing">clothing</option>
      <option value="household">household</option>
      </select> 
      <ProductList category={category}/>  
     </div>
  )
}

export default App