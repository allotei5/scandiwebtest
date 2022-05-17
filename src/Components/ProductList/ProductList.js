import { Product } from '../Product/Product';
import { useState, useEffect } from 'react';

import './ProductList.css';

export const ProductList = ({
  stateProducts,
  setDeleteProductState,
  deleteProductsState,
}) => {
  const addToDeleteState = (product) => {
    // setDeleteProductState([...deleteProductsState, id]);
    // console.log(product);
    console.log('add to delete');
    setDeleteProductState([...deleteProductsState, product.id]);
  };

  const removeFromDeleteState = (product) => {
    // setPrerequisites(prerequisites.filter((value, index) => (value.pre_requisite_id !== pre_requisite_id)))

    setDeleteProductState(
      deleteProductsState.filter((value, index) => value !== product.id)
    );
  };

  return (
    <div className='product-list'>
      {stateProducts.map((product, index) => (
        <Product
          product={product}
          key={product.id}
          checkForDelete={addToDeleteState}
          unCheckForDelete={removeFromDeleteState}
        />
      ))}
    </div>
  );
};
