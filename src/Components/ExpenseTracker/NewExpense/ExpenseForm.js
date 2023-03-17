import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }
    props.onSaveNewExpense(expenseData);
    setEnterdTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form__control">
          <label>Title:</label>
          <input
            type="text"
            placeholder="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="amout-price"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
