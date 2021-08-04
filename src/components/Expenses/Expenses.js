import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {props.items.map((item, index) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={index}
        />
      ))}
    </Card>
  );
};

export default Expenses;
