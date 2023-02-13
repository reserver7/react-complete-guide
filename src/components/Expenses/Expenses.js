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
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSaveYear={addYearHandler} />
      {props.expenses.map((data, index) => {
        return (
          <ExpenseItem
            key={index}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
