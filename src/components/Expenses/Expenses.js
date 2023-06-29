import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((data, index) => {
      return (
        <ExpenseItem
          key={index}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSaveYear={addYearHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
