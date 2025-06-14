import { useState } from "react";
import ExpenseList from "./Expense-tracker/ExpenseList";
import ExpenseFilter from "./Expense-tracker/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/ExpenseForm";
import { es, id } from "zod/dist/types/v4/locales";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 10,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

  return (
    <div>
      <ExpenseForm onSubmit={data => setExpenses([...expenses, {id: expenses.length +1,  ...data}])}/>

      Filter
      <ExpenseFilter onSelect={(category) => setSelectedCategory(category)}/>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;
