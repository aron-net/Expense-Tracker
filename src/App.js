import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Expense from './Components/ExpenseTracker/Expense/Expense';
import CouresGoal from './Components/CourseGoal/CourseGoal';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/expense" element={<Expense />} />
      <Route path="/coursegoal" element={<CouresGoal />} />
    </Routes>
  </div>
);

export default App;
