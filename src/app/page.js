import React from "react";
import { Api } from "./service/api";
import Head from "next/head";

const Home = async () => {
  const products = await Api.getAll();
  return (
    <>
      <Head>
        <title>Cogna | Vitrine de Produtos</title>
        <meta
          mame="description"
          content="A maior rede de educação do Brasil | Produtos Exclusivos"
        />
      </Head>
      <h1>{products[0].title}</h1>
    </>
  );
};
export default Home;
