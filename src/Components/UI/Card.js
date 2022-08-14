import './Card.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

const Card = (props) => {
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
