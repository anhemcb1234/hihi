import React, { useContext, useEffect } from "react";
import { Store } from "../ulti/store";

const Categories = () => {
  const [store, dispatch] = useContext(Store);

  useEffect(() => {
    // console.log("đây là log từ categories: ", store);
  }, [store]);

  useEffect(() => {
    // dispatch({ type: "GETCATEGORIE_ERROR", mess: "lỗi mất rồi" });
  }, []);

  return (
    <>
      <div className="item-note">jasdhalkjdsald</div>
    </>
  );
};

export default Categories;
