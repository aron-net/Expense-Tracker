import './Card.css';

const Card = (props) => {
  const classess = `card ${props.className}`;
  return (
    <div className={classess}>{props.children}</div>
  );
};

export default Card;
