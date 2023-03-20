import PropTypes from 'prop-types';
import './FilterExpense.css';

const FilterExpense = ({ onChangeFilter }) => {
  const dropDownFilterHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="year-filter">Filter by year</label>
        <select id="year-filter" defaultValue="2023" onChange={dropDownFilterHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

FilterExpense.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default FilterExpense;
