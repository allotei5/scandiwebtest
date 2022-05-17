import './HomeNavigation.css';
import { Link } from 'react-router-dom';

export const HomeNavigation = ({ massDeleteProducts }) => {

  return (
    <div className='navigation-bar'>
      <h2 className='navigation-title'>Product List</h2>
      <div className='navigation-items'>
        <Link to='/add-product' className='navigation-button' id='add'>
          ADD
        </Link>
        <button className='navigation-button' id='delete-product-btn' onClick={e => massDeleteProducts()}>MASS DELETE</button>
      </div>
    </div>
  );
  
};
