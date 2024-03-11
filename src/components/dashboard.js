import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  console.log("Inside Dashboard");
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total number of products: 50</p>
      <p>Total number of orders: 20</p>
      <Link to="/products">Manage Products</Link>
      <Link to="/orders">Manage Orders</Link>
    </div>
  );
};

export default Dashboard;
