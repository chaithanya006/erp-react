import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Dashboard = () => {
  console.log("Inside Dashboard");
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-metrics">
        <div className="metric-card">
          <p>Total number of products: 50</p>
        </div>
        <div className="metric-card">
          <p>Total number of orders: 20</p>
        </div>
      </div>
      <div className="dashboard-links">
        <Link to="/products" className="link-button">Manage Products</Link>
        <Link to="/orders" className="link-button">Manage Orders</Link>
      </div>
    </div>
  );
};

export default Dashboard;
