import { useState } from "react";
function App() {
  const [tags, setTags] = useState(['Happy', 'Cheerful']);
  const handleClick = () => {
    //Add
    setTags([...tags, 'Exciting']);  

    //Remove
    setTags(tags.filter(tag =>tag !== 'Happy'));

    //update
    setTags(tags.map(tag => tag === 'Happy' ? 'Happiness' : tag));
  }
  return (
    <div> 
      {tags}
      <button onClick={handleClick}> Click me! </button>
    </div>
  );
}
export default App;
