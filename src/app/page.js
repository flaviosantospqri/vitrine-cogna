import React from "react";
import { Api } from "./service/api";

const Home = async () => {
  const products = await Api.getAll();
  return (
    <div>
      <h1>{products[0].title}</h1>
    </div>
  );
};
export default Home;
