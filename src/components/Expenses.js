import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
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
}

export default Expenses;
