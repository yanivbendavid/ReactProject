import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          {props.years.map(year=><option value={year} key={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
