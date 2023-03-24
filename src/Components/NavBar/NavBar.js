import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/expense" activeClassName="active">Expense</NavLink>
      </li>
      <li>
        <NavLink to="/coursegoal" activeClassName="active">Course Goal</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
