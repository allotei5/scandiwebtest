import { useState, useEffect } from "react"

import { Footer } from "../Footer/Footer"
import { HomeNavigation } from "../HomeNavigation/HomeNavigation"
import { ProductList } from "../ProductList/ProductList"


export const Home = () => {

  document.title = "Product List";

  const localBackend = "http://localhost/scandiweb/backend/index.php";
  const remoteBackend = "https://www.juniortest.brainstormafrica.com/backend/index.php"

  const backend = remoteBackend;

  const [ products, setProducts ] = useState([]);
  const [ deleteProductsState, setDeleteProductState ] = useState([]);


  useEffect(() => {
    const getProductsFromServer = async () => {
        // fetch
        const data = await fetchProducts();
        // set state
        setProducts(data);
    }
    getProductsFromServer();
  }, []);

  const fetchProducts = async () => {

    const res = await fetch(backend);
    const data = await res.json();
    return data;
    
  }

  const deleteProductsFromServer = async () => {
    const res = await fetch(backend, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({
        products: deleteProductsState
      })
    });
    const data = await res.json();
    return data;
  }

  const massDeleteProducts = async () => {
    console.log(deleteProductsState);
    
    let productsCopy = products;
    productsCopy = productsCopy.filter(each => {
      return !deleteProductsState.includes(each.id)
    })

    setProducts(productsCopy);
    setDeleteProductState([]);

    const removeFromServer = await deleteProductsFromServer();
    
  }



  return (
    <>
        <HomeNavigation massDeleteProducts={massDeleteProducts} />
        <ProductList stateProducts={products} setDeleteProductState={setDeleteProductState} deleteProductsState={deleteProductsState} />
        <Footer />
    </>
  )
}
