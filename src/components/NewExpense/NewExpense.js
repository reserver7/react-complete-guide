import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (prop) => {
  const onSaveExpenseDataHandler = (prev) => {
    const expenseData = {
      ...prev,
      id: Math.random().toString(),
    };

    prop.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
