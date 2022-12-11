import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
// import ExpenseChart from "./ExpenseChart";
import "../css/ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={likky}>Click me</button> */}
    </Card>
  );
}

export default ExpenseItem;
