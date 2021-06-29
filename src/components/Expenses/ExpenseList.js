import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">None Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expens) => (
        <ExpenseItem
          key={expens.id}
          title={expens.title}
          cost={expens.amount}
          date={expens.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
