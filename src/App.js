import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { AddProduct } from "./Components/Pages/AddProduct";

const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
    </>
  );
}

export default App;
