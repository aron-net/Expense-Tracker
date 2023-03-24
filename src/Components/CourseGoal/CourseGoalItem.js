import React from 'react';
import PropTypes from 'prop-types';

const GoalItem = ({ id, onDelete, children }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <div
      className="goal-item"
      role="button"
      tabIndex={0}
      onClick={deleteHandler}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          deleteHandler();
        }
      }}
    >
      <p>{children}</p>
    </div>
  );
};

GoalItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GoalItem;
