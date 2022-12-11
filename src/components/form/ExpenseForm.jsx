import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // ---------------------------------------------------------
  const changeTitle = (event) => setTitle(event.target.value);
  const changeAmount = (event) => setAmount(event.target.value);
  const changeDate = (event) => setDate(event.target.value);
  // ---------------------------------------------------------
  // const [err, setErr] = useState(false);
  // ---------------------------------------------------------

  function sendData1(event) {
    event.preventDefault();
    if (title.length > 0 && date.length > 0 && amount.length > 0) {
      const data = {
        title: title,
        amount: amount,
        date: new Date(date),
      };
      props.newData(data);
      setAmount("");
      setTitle("");
      setDate("");
      props.cancel(false, true);
    } else {
      props.cancel(false, false);
    }
  }
  const cancel = () => props.cancel(false);
  // ---------------------------------------------------------
  return (
    <form onSubmit={sendData1}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={changeTitle} value={title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={changeAmount}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={changeDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
        <button type="submit" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
