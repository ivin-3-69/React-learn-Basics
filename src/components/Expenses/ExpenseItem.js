import React from "react";

import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.cost + 0.56}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
