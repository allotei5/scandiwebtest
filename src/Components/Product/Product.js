import { useState, useEffect } from 'react';
import './Product.css'

export const Product = ({ product, checkForDelete, unCheckForDelete }) => {
  
  const [isChecked, setIsChecked ] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    if(!isChecked) {
      checkForDelete(product);
    }else {
      unCheckForDelete(product);
    }
  }


  return (
    <div className='product'>
        <form>
          <input type="checkbox" className='delete-checkbox' checked={isChecked} onChange={checkHandler} />
        </form>
        <div className='product-details'>
            <p>{product.id}</p>
            <p>{product.sku}</p>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.attribute}</p>
        </div>
    </div>
  )
}
