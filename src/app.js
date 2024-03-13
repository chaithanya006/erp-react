import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Products from './components/products';
import Orders from './components/orders';
import Calendar from './components/calendar';
import '../src/index.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <div className="switch-container">
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
