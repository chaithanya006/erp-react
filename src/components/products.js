import React, { useState } from 'react';
import '../index.css';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', price: 100, stock: 50 },
    { id: 2, name: 'Product B', category: 'Clothing', price: 45, stock: 30 },
    { id: 3, name: 'Product C', category: 'Home & Kitchen', price: 80, stock: 20 },
    { id: 4, name: 'Product D', category: 'Sports', price: 60, stock: 15 },
    { id: 5, name: 'Product E', category: 'Beauty', price: 25, stock: 40 },
    { id: 6, name: 'Product F', category: 'Books', price: 30, stock: 10 },
    { id: 7, name: 'Product G', category: 'Toys', price: 50, stock: 25 },
    { id: 8, name: 'Product H', category: 'Furniture', price: 120, stock: 5 },
    { id: 9, name: 'Product I', category: 'Food & Beverages', price: 15, stock: 60 },
    { id: 10, name: 'Product J', category: 'Automotive', price: 90, stock: 18 },
    { id: 11, name: 'Product K', category: 'Jewelry', price: 75, stock: 12 },
    { id: 12, name: 'Product L', category: 'Tools', price: 40, stock: 22 },
    { id: 13, name: 'Product M', category: 'Health', price: 55, stock: 35 },
    { id: 14, name: 'Product N', category: 'Pets', price: 20, stock: 45 },
    { id: 15, name: 'Product O', category: 'Garden', price: 70, stock: 8 },
    { id: 16, name: 'Product P', category: 'Music', price: 65, stock: 14 },
    { id: 17, name: 'Product Q', category: 'Electronics', price: 110, stock: 28 },
    { id: 18, name: 'Product R', category: 'Clothing', price: 50, stock: 33 },
    { id: 19, name: 'Product S', category: 'Home & Kitchen', price: 85, stock: 17 },
    { id: 20, name: 'Product T', category: 'Sports', price: 70, stock: 11 },
  ]);

  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductStock, setNewProductStock] = useState('');

  const [editProductId, setEditProductId] = useState(null);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: newProductName || `Product ${products.length + 1}`,
      category: newProductCategory || 'Miscellaneous',
      price: parseFloat(newProductPrice) || 0,
      stock: parseInt(newProductStock) || 0,
    };

    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductCategory('');
    setNewProductPrice('');
    setNewProductStock('');
  };

  const handleEditProduct = (productId, updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      )
    );

    setEditProductId(null);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));

    setEditProductId(null);
  };

  const startEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setNewProductName(productToEdit.name);
      setNewProductCategory(productToEdit.category);
      setNewProductPrice(productToEdit.price.toString());
      setNewProductStock(productToEdit.stock.toString());
      setEditProductId(productId);
    }
  };

  return (
    <div className="products-container">
      <h2>Products Management</h2>
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          style={{ marginRight: '6px' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProductCategory}
          onChange={(e) => setNewProductCategory(e.target.value)}
          style={{ marginRight: '6px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
          style={{ marginRight: '6px' }}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProductStock}
          onChange={(e) => setNewProductStock(e.target.value)}
          style={{ marginRight: '6px' }}
        />
        <button className="add-button" onClick={editProductId ? () => handleEditProduct(editProductId, {
          name: newProductName,
          category: newProductCategory,
          price: parseFloat(newProductPrice) || 0,
          stock: parseInt(newProductStock) || 0,
        }) : handleAddProduct}>
          {editProductId ? 'Edit Product' : 'Add Product'}
        </button>
      </div>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <strong className="product-name">{product.name}</strong> - Category: {product.category} - Price: ${product.price} - Stock: {product.stock}
            <button className="edit-button" onClick={() => startEditProduct(product.id)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
