import Card from '../../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveNewExpense = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toLocaleString(),
        }
        props.onAddNewExpense(expenseData)
    }
    return <Card className='new-expense'><ExpenseForm onSaveNewExpense={saveNewExpense}/></Card>
};

export default NewExpense;