import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [bool, setBool] = useState(false);
  const [err, setErr] = useState(true);
  const fetchData = (x) => {
    const data = { ...x, id: Math.random().toString() };
    props.newData(data);
  };

  function duck(x, y) {
    setBool(x);
    setErr(y);
  }
  const likky = () => {
    setBool(true);
    setErr(true);
  };
  return (
    <div className="new-expense">
      {!err && <p>Enter Data correctly🐇</p>}
      {!bool && <button onClick={likky}>Add Expense</button>}
      {bool && <ExpenseForm newData={fetchData} cancel={duck} />}
    </div>
  );
};

export default NewExpense;
