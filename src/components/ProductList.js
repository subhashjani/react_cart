import React from "react";
import Product from "./Product";
export default function ProductList(props) {
  console.log(props);
  return props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrQuantity={props.incrQuantity}
        index={i}
      />
    );
  });
}
