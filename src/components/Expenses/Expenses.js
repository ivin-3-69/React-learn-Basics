import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList"
import ExpensesFilter from "../Filter/Filter";
import React, { useState } from "react";
import ExpensesChart from './ExpenseChart'


function Expenses(props) {
  const [yearSel, InputyearSel] = useState("2019");
  const filtered = props.items.filter(
    (item) => item.date.getFullYear().toString() === yearSel
  );
  const changeFilterHandler = (year) => {
    InputyearSel(year);
  };


  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          deafultYear={yearSel}
          onChangeFilter={changeFilterHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses = {filtered}></ExpensesChart>
        <ExpenseList items = {filtered} />
      </Card>
    </div>
  );
}

export default Expenses;
