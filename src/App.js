import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      price: 99,
      name: "abc",
      quantity: 0,
    },
    {
      price: 990,
      name: "efg",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} />
      </main>

      {/*<Footer />*/}
    </>
  );
}

export default App;
