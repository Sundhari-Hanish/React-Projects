import React, { useState } from "react";
import axios from "axios";
function AddProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    axios.post("http://localhost:5000/products", {
      name,
      quantity,
      price,
    });
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}

export default AddProduct;
