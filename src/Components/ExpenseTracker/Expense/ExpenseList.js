import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import './ExpenseList.css';

const ExpenseList = ({ data }) => (
  <Card className="expense-list">
    {data.map(({
      id, title, amount, date,
    }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))}
  </Card>
);

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
