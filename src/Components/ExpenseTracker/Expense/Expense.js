import { useState } from 'react';
import ExpenseContainer from './ExpenseContainer';
import NewExpense from '../NewExpense/NewExpense';
import Card from '../../UI/Card';
import './Expense.css';
import Chart from '../Chart/Chart';

const dummyExpense = [
  {
    id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
  },
  {
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),
  },
  {
    id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),
  },
  {
    id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
  },
];

const Expense = () => {
  const [expenses, setExpense] = useState(dummyExpense);

  const addNewExpense = (enteredNewExpense) => {
    setExpense((prevExpense) => [enteredNewExpense, ...prevExpense]);
  };

  return (
    <Card className="expense">
      <NewExpense onAddNewExpense={addNewExpense} />
      <Chart />
      <ExpenseContainer data={expenses} />
    </Card>
  );
};

export default Expense;
