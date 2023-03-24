import React from 'react';
import PropTypes from 'prop-types';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = ({ items, onDeleteItem }) => (
  <ul className="goal-list">
    {items.map((goal) => (
      <CourseGoalItem
        key={goal.id}
        id={goal.id}
        onDelete={onDeleteItem}
      >
        {goal.text}
      </CourseGoalItem>
    ))}
  </ul>
);

CourseGoalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default CourseGoalList;
