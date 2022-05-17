import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { ProductAddForm } from '../ProductAddForm/ProductAddForm';
import { ProductAddNavigation } from '../ProductAddNavigation/ProductAddNavigation';

export const AddProduct = () => {

  document.title = "Product Add"

  const [sku, setSku] = useState('');
  const [skuError, setSkuError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [attribute, setAttribute] = useState('');
  const [ attributeError, setAttribruteError ] = useState('');

  const localBackend = 'http://localhost/scandiweb/backend/index.php';
  const remoteBackend =
    'https://www.juniortest.brainstormafrica.com/backend/index.php';
  
  const backend = remoteBackend;

  const saveProduct = async () => {
    // TODO validation
    // validate SKU
    setSkuError('')
    setNameError('')
    setPriceError('');
    setAttribruteError('')

    let error = 0;

    const requiredErrorMessage = "Please, submit required data";

    if (sku === '') {
      setSkuError(requiredErrorMessage);
      error += 1;
    } 

    if (name === '') {
      setNameError(requiredErrorMessage);
      error += 1;
    } 
    
    if (price === '') {
      setPriceError(requiredErrorMessage);
      error += 1;
    } 

    if (attribute === '') {
      setAttribruteError(requiredErrorMessage);
    }

    console.log(attribute);
    
    if (error === 0) {

        const res = await fetch(backend, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            sku,
            name,
            price,
            attribute,
          }),
        });
    
        const data = await res.json();
    
        if (data.response === true) {
          setSku('');
          setName('');
          setPrice('');
          setAttribute('');
          window.location.replace("/");
        } else {
          if (data.responseMessage == 1) {
            setSkuError("SKU is not unique");
          }
        }
      };

    }

    const onCancel = () => {
      setSku('');
      setName('');
      setPrice('');
      setAttribute('');
      window.location.replace("/");
    }

    

  return (
    <>
      <ProductAddNavigation saveProduct={saveProduct} onCancel={onCancel} />
      <ProductAddForm
        setSku={setSku} sku={sku}
        setName={setName} name={name}
        setPrice={setPrice} price={price}
        setAttribute={setAttribute} attribute={attribute}
        skuError={skuError}
        nameError={nameError}
        priceError={priceError}
        attributeError={attributeError}
      />
      <Footer />
    </>
  );
};
