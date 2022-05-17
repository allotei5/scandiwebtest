import './ProductAddNavigation.css';
import { Link } from 'react-router-dom';

export const ProductAddNavigation = ({ saveProduct, onCancel }) => {
  return (
    <div className='navigation-bar'>
        <h2 className='navigation-title'>Product Add</h2>
        <div className='navigation-items'>
            <button className='navigation-button' id='save' onClick={ e => saveProduct() }>Save</button>
            <button className='navigation-button' id='cancel' onClick={ e => onCancel() }>Cancel</button>
        </div>
    </div>
  )
}
