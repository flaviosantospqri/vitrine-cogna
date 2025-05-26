import React from "react";
import Head from "next/head";
import Gallery from "../components/gallery";
import style from "./page.module.css";
import { Api } from "../service/api";

export const metadata = {
  title: "Cogna | Vitrine de Produtos",
  description: "A maior rede de educação do Brasil | Produtos Martech",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

//Não adicioner o filtro aqui, pois o optei por manter o mesmo na Galeria de Produtos
//e utilizar o use client para garantir que o componente seja renderizado no lado do cliente
//mantendo a Home como uma página estática, aproveitando os recursos do SSG (Static Site Generation)
const Home = async () => {
  try {
    const products = await Api.getAll();

    if (!products || products.length === 0) {
      return <p>Os produtos ainda não foram carregados.</p>;
    }

    return (
      <>
        {/* aqui está sendo utilizado o Head do next, para adicionar o title e description 
         embora a versão mais recente do Next, aconselhe o uso de metadata exportável, como fiz na página de produto*/}
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>

        {/* 
         Optei por manter o banner localmente neste componente,
         pois ele é simples, exclusivo da página Home e não será reutilizado em outras partes do projeto.
         Como não há barra de navegação e o banner não possui complexidade alta,
         desacoplar para um componente separado não traria benefícios significativos.
         Caso futuramente o banner se torne mais complexo ou reutilizável, podemos avaliar a extração.
        
         */}
        <div className={style.container}>
          <div className={style.floating_lights}></div>
          <section className={style.banner}>
            <h1>
              Produtos Exclusivos Martech <br />{" "}
              <span className={style.target}>By Cogna</span>
            </h1>
            <p>A melhor qualidade em vestuário escolar/universitário.</p>
          </section>
        </div>

        <Gallery products={products} />
      </>
    );
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    return <p>Erro ao carregar os produtos.</p>;
  }
};

export default Home;
