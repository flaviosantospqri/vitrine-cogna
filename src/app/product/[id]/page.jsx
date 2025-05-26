import React from "react";
import style from "./product.module.css";
import { Api } from "@/service/api";
import CardDetails from "@/components/cardDetails";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await Api.getById(id);
  if (!product) {
    return { title: "Produto não encontrado" };
  }
  return {
    title: `Martech | ${product.title}`,
    description: product.description,
  };
}
//Uso o params para pegar o id do produto
//e fazer a busca na API, retornando o produto específico
//matendo os os recursos do SSG
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  let product;

  try {
    const product = await Api.getById(id);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
  }

  if (!product) {
    return (
      <section className={style.error_page}>
        <h2>Produto não encontrado</h2>
        <p>Este produto não existe ou ainda não está disponível.</p>
        <Link href="/">Voltar para a galeria</Link>
      </section>
    );
  }

  // Crio o JSON-LD para SEO, com as informações do produto
  // e o contexto do schema.org
  // O JSON-LD é uma forma de estruturar dados em JSON
  // para que os motores de busca possam entender melhor o conteúdo da página
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "Cogna",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <section className={style.container}>
      <CardDetails product={product} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default ProductDetails;

//Aplico o generateStaticParams para gerar as páginas estáticas
//e melhorar a performance do site, evitando o uso excessivo de SSG
export async function generateStaticParams() {
  const products = await Api.getAll();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
