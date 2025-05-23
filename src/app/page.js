import React from "react";
import { Api } from "./service/api";
import Head from "next/head";
import Gallery from "./components/gallery";

const Home = async () => {
  //Após o tratamento da API, no arquivo responsável pego o resultado aqui, desta forma, não me desfaço do SSG.
  const products = await Api.getAll();

  //Dou uma resposta visual ao usuário
  if (!products || products.length === 0) {
    return <p>Os produtos ainda não foram carregados</p>;
  }
  return (
    //Uso de Next/head para melhor busca pelos Crawlers do Google otimizando o SEO
    <>
      <Head>
        <title>Cogna | Vitrine de Produtos</title>
        <meta
          name="description"
          content="A maior rede de educação do Brasil | Produtos Martech"
        />
      </Head>
      <h1>Produtos Exclusivos da Martech By Cogna</h1>
      <Gallery products={products} />
    </>
  );
};
export default Home;
