import { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";
import { z } from "zod"
import {zodResolver } from "@hookform/resolvers/zod"

 const schema = z.object({
   name: z.string().nonempty({ message: 'Name field is required' }).min(3, { message: 'Name must be at least 3 characters' }),
  age: z.number({invalid_type_error: "Age field is required"}).min(18, {message: 'Age must be atleast 18'})  
})

type FormData =  z.infer<typeof schema>; 

const Form = () => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
  
  const onSubmitForm = (data: FieldValues) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name')} id="name" type="text" className="form-control"/>
        {errors.name && <p className="text-danger">{errors.name.message}</p>  }
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input {...register('age', {valueAsNumber: true})} type="number" className="form-control" />
        {errors.age && <p className="text-danger">{errors.age.message}</p>  }
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

// this is to test if the git is still working in the new machine