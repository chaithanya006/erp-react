import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', price: 100, stock: 50 },
    // Add more mock data as needed
  ]);

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h2>Products Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - Stock: {product.stock}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
