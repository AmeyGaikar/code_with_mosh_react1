import { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";

const Form = () => {
  const {register, handleSubmit} = useForm();
  console.log(register('name'));

  const onSubmitForm = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name')} id="name" type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input {...register('age')} type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
