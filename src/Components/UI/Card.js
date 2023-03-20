import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => {
  const classes = `card ${className}`;
  return (
    <div className={classes}>{children}</div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: '',
};

export default Card;
