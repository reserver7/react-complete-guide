import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const addYearHandler = (prev) => {
    setFilterYear(prev);
    console.log(filteredExpenses);
  };

  const filteredExpenses = props.expenses.filter((o) => {
    return o.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSaveYear={addYearHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
