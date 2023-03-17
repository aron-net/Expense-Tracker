import PropTypes from 'prop-types';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;
