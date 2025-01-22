import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: '',
    age: ''
  })
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" onChange={(event) => setPerson({...person, name: event.target.value})} type="text" className="form-control" value={person.name}/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input type="number" value={person.age} onChange={(event) => setPerson({...person, age:event.target.value})} className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
