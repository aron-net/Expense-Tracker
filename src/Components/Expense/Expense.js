import './Expense.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((item) => item.date.getFullYear().toString() === filteredYear);

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //     expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //         key={item.id}
  //         title={item.title}
  //         amount={item.amount}
  //         date={item.date}
  //     />
  // ));
  // }

  return (
    <Card className="expense">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
