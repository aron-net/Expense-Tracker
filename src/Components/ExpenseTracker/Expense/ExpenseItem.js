import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => (
  <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__amount">
          $
          {amount}
        </div>
      </div>
    </Card>
  </li>
);

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
