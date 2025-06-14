import categories from "./categories";

interface Prop {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({onSelect}: Prop) => {
  return (
    <div className="mb-3">
      <select className="form-select"  onChange={event => onSelect(event.target.value)}>
          <option value="" disabled hidden></option>
        <option value="">All Categories</option>
        {categories.map(catregory => <option value={catregory} key={catregory}>{catregory}</option>) }
      </select>
    </div>
  );
};

export default ExpenseFilter;
