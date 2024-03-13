import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../index.css';

const OrdersCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-11', status: 'Processing' },
    { id: 2, customerName: 'Jane Doe', orderDate: '2024-03-12', status: 'Shipped' },
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-11', status: 'Processing' },
    { id: 2, customerName: 'Jane Doe', orderDate: '2024-03-12', status: 'Shipped' },
    { id: 3, customerName: 'Alice Smith', orderDate: '2024-03-13', status: 'Delivered' },
    { id: 4, customerName: 'Bob Johnson', orderDate: '2024-03-14', status: 'Processing' },
    { id: 5, customerName: 'Eva Davis', orderDate: '2024-03-15', status: 'Shipped' },
    { id: 6, customerName: 'Michael Brown', orderDate: '2024-03-16', status: 'Delivered' },
    { id: 7, customerName: 'Olivia Wilson', orderDate: '2024-03-17', status: 'Processing' },
    { id: 8, customerName: 'James Miller', orderDate: '2024-03-18', status: 'Shipped' },
    { id: 9, customerName: 'Sophia Martinez', orderDate: '2024-03-19', status: 'Delivered' },
    { id: 10, customerName: 'William Anderson', orderDate: '2024-03-20', status: 'Processing' },
    { id: 11, customerName: 'Ava Taylor', orderDate: '2024-03-21', status: 'Shipped' },
    { id: 12, customerName: 'Daniel Thomas', orderDate: '2024-03-22', status: 'Delivered' },
    { id: 13, customerName: 'Emily Garcia', orderDate: '2024-03-23', status: 'Processing' },
    { id: 14, customerName: 'Liam Rodriguez', orderDate: '2024-03-24', status: 'Shipped' },
    { id: 15, customerName: 'Mia Jackson', orderDate: '2024-03-25', status: 'Delivered' },
    { id: 16, customerName: 'Jackson White', orderDate: '2024-03-26', status: 'Processing' },
    { id: 17, customerName: 'Aiden Harris', orderDate: '2024-03-27', status: 'Shipped' },
    { id: 18, customerName: 'Emma Clark', orderDate: '2024-03-28', status: 'Delivered' },
    { id: 19, customerName: 'Noah Lewis', orderDate: '2024-03-29', status: 'Processing' },
    { id: 20, customerName: 'Isabella Hall', orderDate: '2024-03-30', status: 'Shipped' },
  ]);

  const ordersForSelectedDate = orders.filter(
    (order) =>
      new Date(order.orderDate).toLocaleDateString() === selectedDate.toLocaleDateString()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h2>Orders Calendar View</h2>
      <div className="calendar">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <div className="orders-for-date">
        <h3>Orders for {selectedDate.toLocaleDateString()}</h3>
        {ordersForSelectedDate.length > 0 ? (
          <ul>
            {ordersForSelectedDate.map((order) => (
              <li key={order.id}>
                {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersCalendar;
