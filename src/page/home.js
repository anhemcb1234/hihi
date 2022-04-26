import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getListProduct } from "../action/product";

const Home = () => {
  const dispatch = useDispatch();

  const temp = useSelector((state) => state);

  return (
    <div>
      1234567890
      {console.log("check state: ", temp)}
    </div>
  );
};

export default Home;
