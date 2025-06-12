import React from "react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Prop) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td> {exp.description} </td>
            <td> {exp.amount} </td>
            <td> {exp.category} </td>
            <td>
              <button
                onClick={() => onDelete(exp.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2) }</td>
            <td></td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
