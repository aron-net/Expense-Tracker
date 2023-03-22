import PropTypes from 'prop-types';
import './ChartBar.css';

const ChartBar = ({ chartBarData }) => {
  let chartBarFill = '0%';
  if (chartBarData.max > 0) {
    chartBarFill = `${Math.random((chartBarData.value / chartBarData.maxvalue) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartBarFill }} />
      </div>
      <div className="chart-bar__label">{chartBarData.label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  chartBarData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ChartBar;
