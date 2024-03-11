import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-11', status: 'Processing' },
  ]);

  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
