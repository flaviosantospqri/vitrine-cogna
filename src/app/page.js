"use client";
import React, { useEffect, useState } from "react";
import { fetchAllData } from "./lib/products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const prod = await fetchAllData();
      if (prod) {
        setProducts(prod);
      }
    };
    getData();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
