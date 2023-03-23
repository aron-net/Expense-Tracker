import PropTypes from 'prop-types';
import './ChartBar.css';

const ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ChartBar;
