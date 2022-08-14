import './ExpenseDate.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-us', { day: '2-digit' });
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
