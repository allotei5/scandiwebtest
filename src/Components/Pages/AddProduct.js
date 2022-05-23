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
  const [ type, setType ] = useState('');
  const [ serverError, setServerError] = useState('');

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
      setSkuError("SKU is required");
      error += 1;
    } 

    if (name === '') {
      setNameError("Name is required");
      error += 1;
    } 
    
    if (price === '') {
      setPriceError("Price is required");
      error += 1;
    } 

    if (price < 0) {
      setPriceError("Price must not be less than 0")
    }

    if (isNaN(price)) {
      setPriceError("Price must be a number");
    }

    if (attribute === '') {
      setAttribruteError(requiredErrorMessage);
    }

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
            type
          }),
        });

        console.log(JSON.stringify({
          sku,
          name,
          price,
          attribute,
          type
        }));
        

        const data = await res.json();
    
        if (data.response === true) {
          setSku('');
          setName('');
          setPrice('');
          setAttribute('');
          window.location.replace("/");
        } else {
          setServerError(data.responseMessage);
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
        setType={setType} type={type}
        skuError={skuError}
        nameError={nameError}
        priceError={priceError}
        attributeError={attributeError}
        serverError={serverError}
      />
      <Footer />
    </>
  );
};
