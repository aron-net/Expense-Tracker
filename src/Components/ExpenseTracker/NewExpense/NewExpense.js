import PropTypes from 'prop-types';
import Card from '../../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const saveNewExpense = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toLocaleString(),
    };
    onAddNewExpense(expenseData);
  };
  return <Card className="new-expense"><ExpenseForm onSaveNewExpense={saveNewExpense} /></Card>;
};
NewExpense.propTypes = {
  onAddNewExpense: PropTypes.func.isRequired,
};
export default NewExpense;
