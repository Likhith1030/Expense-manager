import ExpenseItem from "./ExpenseItem";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import ExpenseChart from "./ExpenseChart";

import "../css/Expenses.css";
import "../css/Filter.css";

const ExpenseList = (props) => {
  const [year, setYear] = useState("All");
  const [filteredData, setfilteredData] = useState(props.data);
  const [bool, setBool] = useState(false);
  const fetchData = (x) => setYear(x);
  useEffect(() => {
    if (year === "All") {
      setfilteredData(props.data);
      setBool(false);
    } else {
      const y = props.data.filter((x) => {
        return x.date.getFullYear().toString() === year;
      });
      setfilteredData(y);
      setBool(true);
    }
  }, [props.data, year]);

  return (
    <div className="expenses">
      <Filter data={fetchData} />
      {bool && <ExpenseChart expenses={filteredData} />}
      {filteredData.length === 0 ? (
        <p style={{ color: "white" }}>No items in this year</p>
      ) : (
        filteredData.map((i) => {
          return (
            <ExpenseItem
              key={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          );
        })
      )}

      {/* <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      /> */}
    </div>
  );
};

export default ExpenseList;
