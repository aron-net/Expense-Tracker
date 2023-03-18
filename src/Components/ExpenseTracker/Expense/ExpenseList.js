import { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import './ExpenseList.css';
import FilterExpense from '../FilterExpense/FilterExpense';

const ExpenseList = ({ data }) => {
  const [filterExpense, setFilterExpense] = useState('2023');
  const addFilterChangeHandler = (selectYear) => {
    setFilterExpense(selectYear);
  };
  return (
    <Card className="expense-list">
      <FilterExpense
        selected={filterExpense}
        onChangeFilter={addFilterChangeHandler}
      />
      {data.map(({
        id, title, amount, date,
      }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
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
