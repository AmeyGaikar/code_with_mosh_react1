import { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";

interface FormData {
  name: string,
  age: number
}

const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmitForm = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name', {required: true, minLength: 3})} id="name" type="text" className="form-control"/>
        {errors.name?.type === 'required' && <p className="text-danger">The name field is required.</p> || errors.name?.type === 'minLength' && <p className="text-danger">The name field should be more then 3 letters.</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input {...register('age', {required: true})} type="number" className="form-control" />
        {errors.age?.type === 'required' && <p className="text-danger">Age field is required.</p>}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

// this is to test if the git is still working in the new machine