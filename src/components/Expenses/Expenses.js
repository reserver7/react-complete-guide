import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const addYearHandler = (prev) => {
    console.log(prev);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveYear={addYearHandler}></ExpensesFilter>
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
