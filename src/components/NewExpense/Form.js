import "./Form.css";
import React, { useState } from "react";

function Form(props) {
  const [cond, setcond] = useState(0);
  const [Input, setInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredCost: "",
  });

  function TitleChangeHandler(event) {
    setInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  }
  function DateChangeHandler(event) {
    setInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  }
  function CostChangeHandler(event) {
    setInput((prevState) => {
      return {
        ...prevState,
        enteredCost: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    
    event.preventDefault();
    const expenseData = {
      title: Input.enteredTitle,
      amount: parseFloat(Input.enteredCost),
      date: new Date(Input.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setInput({
      enteredTitle: "",
      enteredDate: "",
      enteredCost: "",
    });
    funcc()
  }

  function funcc() {
    setcond((prev) => {
      return (prev + 1) % 2;
    });
  }
  return (
    <div>
      {cond === 0 ? (
        <button onClick={funcc}>Add</button>
      ) : (
        <div>
          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__controls">
                <label>Title</label>
                <input
                  type="text"
                  value={Input.enteredTitle}
                  onChange={TitleChangeHandler}
                />
              </div>
              <div className="new-expense__controls">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={Input.enteredCost}
                  onChange={CostChangeHandler}
                />
              </div>
              <div className="new-expense__controls">
                <label>Date</label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={Input.enteredDate}
                  onChange={DateChangeHandler}
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="submit" >Add Expense</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
