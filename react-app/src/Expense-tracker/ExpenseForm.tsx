import categories from "./categories";
import z, { date } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description should atleast be 3 characters!" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Categories is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Prop {
  onSubmit: (data: FormData) => void;
}
const ExpenseForm = ({ onSubmit }: Prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="" hidden></option>
          {categories.map((catregory) => (
            <option value={catregory} key={catregory}>
              {catregory}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
