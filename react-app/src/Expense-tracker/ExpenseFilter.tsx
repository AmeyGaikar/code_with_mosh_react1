interface Prop {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({onSelect}: Prop) => {
  return (
    <div className="mb-3">
      <select className="form-select"  onChange={event => onSelect(event.target.value)}>
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
