import { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import './ExpenseList.css';
import FilterExpense from '../FilterExpense/FilterExpense';

const ExpenseList = ({ data }) => {
  const [filterYear, setFilterYear] = useState('2023');
  const addFilterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  const filterExpense = data.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear,
  );

  let expenseContainer = <p>No Expense Item</p>;
  if (filterExpense.length > 0) {
    expenseContainer = filterExpense.map(({
      id, title, amount, date,
    }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))};
  return (
    <Card className="expense-list">
      <FilterExpense
        selected={filterYear}
        onChangeFilter={addFilterChangeHandler}
      />
      {/* option one for if conditions  */}
      {/* {filterExpense.length === 0 && <p>No Expense Item</p>}
      {filterExpense.length > 0 && filterExpense.map(({
        id, title, amount, date,
      }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))} */}
      {/* Second option for is condtion */}
      {/* {filterExpense.length === 0 ? (
        <p>No Expense</p>
        ) : (
        filterExpense.map(({
          id, title, amount, date,
        }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))
      )} */}
      {expenseContainer}
    </Card>
  );
};

ExpenseList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};

export default ExpenseList;
