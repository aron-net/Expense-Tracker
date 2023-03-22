import PropTypes from 'prop-types';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ chartExpense }) => (
  <div className="chart">
    {chartExpense.map((chartData) => (
      <ChartBar
        key={chartData.label}
        value={chartData.value}
        maxValue={null}
        label={chartData.label}
      />
    ))}
  </div>
);

Chart.propTypes = {
  chartExpense: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Chart;
