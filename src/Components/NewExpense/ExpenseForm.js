import { useState } from 'react';
import './ExpenseForm.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState(
  //     {
  //         inputTitle: '',
  //         inputAmount: '',
  //         inputDate: ''
  //     })

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
    // setUserInput( {
    //     ...userInput,
    //     inputTitle: e.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, inputTitle: e.target.value};
    // })
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // setUserInput( {
    //     ...userInput,
    //     inputAmount: e.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, inputAmount: e.target.value};
    // })
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // setUserInput( {
    //     ...userInput,
    //     inputDate: e.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, inputDate: e.target.value};
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputTitle('');
    setInputAmount('');
    setInputAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="controls">
        <div className="control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={inputTitle} />
        </div>
        <div className="control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={inputAmount} />
        </div>
        <div className="control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2030-12-31" onChange={dateChangeHandler} value={inputDate} />
        </div>
        <button type="submit" className="action">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
