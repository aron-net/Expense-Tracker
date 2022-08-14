import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

const ExpenseItem = (props) => (
  <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="details">
        <h2>{props.title}</h2>
        <div className="price">
          $
          {props.amount}
        </div>
      </div>
    </Card>
  </li>
);

export default ExpenseItem;
