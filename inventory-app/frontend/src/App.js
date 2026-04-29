import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>Inventory Management</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
