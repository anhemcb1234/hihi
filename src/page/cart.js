import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  console.log(location.state);

  return <></>;
};

export default Cart;
