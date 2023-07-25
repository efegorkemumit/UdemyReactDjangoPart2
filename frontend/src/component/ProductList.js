import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-12'>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className='price-product'>$ {product.price}</p>
              <Link to={`/products/${product.id}`}>  View </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductList;