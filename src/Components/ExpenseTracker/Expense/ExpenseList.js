import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ item }) => {
   if (item.length === 0) {
   return <h2>No Expense Item Found</h2>
   }
 return (
  <ul className='expense__content__list'>
    {item.map(({
      id, title, amount, date,
    }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))}
  </ul>
)};

ExpenseList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};
export default ExpenseList;
