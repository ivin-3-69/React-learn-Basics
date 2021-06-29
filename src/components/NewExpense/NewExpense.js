import "./NewExpense.css";
import Form from "./Form";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id:Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler}></Form>
    </div>
  );
}

export default NewExpense;
