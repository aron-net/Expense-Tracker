import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className='expense-form'>
                <div>
                    <label>Title:</label>
                    <input type='text' placeholder='title' />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type='number' min='0.01' step='0.01' placeholder='amout-price' />
                </div>
                <div>
                    <label>Date:</label>
                    <input type='date' min='2019-01-01' max='2030-12-31'/>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;