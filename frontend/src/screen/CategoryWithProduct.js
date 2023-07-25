// ProductScreen.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryDetails } from '../actions/ProductActions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CategoryWithProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Get product details from the Redux store
  const productCategory = useSelector((state) => state.productCategory);
  const { loading, error, products } = productCategory;

  useEffect(() => {
    // Dispatch the getCategoryDetails action with the category ID when the component mounts
    dispatch(getCategoryDetails(id));
  }, [dispatch, id]);

  // Update the products state when the productCategory changes
  

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
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
      )}
    </div>
  );
};

export default CategoryWithProduct;
