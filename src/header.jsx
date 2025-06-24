import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // sahi path

function HeaderComponent() {
  const { cartCount } = useContext(CartContext); // context se value lo

  return (
    <h1>🛒 Cart Items: {cartCount}</h1> // yahan counter chalega
  );
}

export default HeaderComponent;
