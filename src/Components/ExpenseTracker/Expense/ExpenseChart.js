import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart';

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  const updatedChartDataPoints = expenses.reduce((acc, expense) => {
    const dataPointIndex = expense.date.getMonth();
    acc[dataPointIndex].value += expense.amount;
    return acc;
  }, chartDataPoints);

  return <Chart dataPoints={updatedChartDataPoints} />;
};

ExpenseChart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};

export default ExpenseChart;
