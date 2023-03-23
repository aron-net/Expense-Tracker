import './CourseGoalForm.css';
const CourseGoalForm = () => {
    return (
        <div className="course-goal-form__container">
            <form className='course-goal__form'>
                <label className='course-goal__label'>Course Goal</label>
                <input className='course-goal__input' type='text' />
                <button className='course-goal__button' type="button">Add Goal</button>
            </form>
        </div>
    );
}

export default CourseGoalForm;