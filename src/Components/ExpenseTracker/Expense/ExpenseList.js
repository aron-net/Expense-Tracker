import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import './ExpenseList.css';

const ExpenseList = (props) => (
  <Card className="expense-list">
    {props.data.map((el) => (
      <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
    ))}
  </Card>
);

export default ExpenseList;
