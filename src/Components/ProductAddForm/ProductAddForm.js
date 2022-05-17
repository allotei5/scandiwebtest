import { useState } from 'react'

import './ProductAddForm.css'
import { FormWeight } from '../FormWeight/FormWeight'
import { FormSize } from '../FormSize/FormSize'
import { FormDimension } from '../FormDimension/FormDimension'

export const ProductAddForm = ({ setSku, sku, setName, name, setPrice, price,  setAttribute, attribute, skuError, nameError, priceError, attributeError }) => {

    const [ type, setType ] = useState(0);

    const selectOnChange = (value) => {
        setType(value);
        setAttribute("");
    }

  return (
    <div id='product_add_div'>
        <form id='product_form'>
            <div className='form-input'>
                <div className='form-label'>
                    <label>SKU</label>
                </div>
                <div className='input-container'>
                    <input type="text" placeholder="JVC20023" required id='sku' value={sku} onChange={ e => setSku(e.target.value) } />
                    { (skuError !== "") ? <small>{skuError}</small> : "" }
                </div>
            </div>
            <div className='form-input'>
                <div className='form-label'>
                    <label>Name</label>
                </div>
                <div className='input-container'>
                    <input type="text" placeholder="ACMEDISC" required id='name' value={name} onChange={ e => setName(e.target.value) } />
                    { (nameError !== "") ? <small>{nameError}</small> : "" }
                </div>
            </div>
            <div className='form-input'>
                <div className='form-label'>
                    <label className='form-label'>Price ($)</label>
                </div>
                <div className='input-container'>
                    <input type="number" placeholder="12" id='price' value={price} onChange={ e => setPrice(e.target.value) } />
                    { (priceError !== "") ? <small>{priceError}</small> : "" }

                </div>
            </div>
            <div className='form-input'>
                <div className='form-label'>
                    <label className='form-label'>Type Switcher</label>
                </div>
                <select id='productType' onChange={e => selectOnChange(e.target.value)}>
                    <option selected disabled>Type Switcher</option>
                    <option id='DVD' value="1">DVD</option>
                    <option id='Furniture' value="2">Book</option>
                    <option id='Book' value="3">Furniture</option>
                </select>
            </div>
            {
                (type == 1) ? <FormSize setAttribute={setAttribute} attribute={attribute} attributeError={attributeError} />
                : (type == 2) ? <FormWeight setAttribute={setAttribute} attribute={attribute} attributeError={attributeError} />
                : (type == 3) ? <FormDimension setAttribute={setAttribute} attribute={attribute} attributeError={attributeError} />
                : ""
                
            }
        </form>
    </div>
  )
}
