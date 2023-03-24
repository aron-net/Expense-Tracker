import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseGoalForm.css';

const CourseGoalForm = ({ onAddGoal }) => {
  const [enteredCourse, setEnteredCourse] = useState('');

  const goalInputHandler = (event) => {
    setEnteredCourse(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onAddGoal(enteredCourse);
    setEnteredCourse('');
  };

  return (
    <div className="course-goal-form__container">
      <form onSubmit={formSubmitHandler} className="course-goal__form">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="course-goal" className="course-goal__label">
          Course Goal
        </label>
        <input
          id="course-goal"
          className="course-goal__input"
          type="text"
          onChange={goalInputHandler}
          value={enteredCourse}
        />
        <button className="course-goal__button" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

CourseGoalForm.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default CourseGoalForm;
