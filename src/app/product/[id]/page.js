import React from "react";
import CardDetails from "@/components/cardDetails";
import { Api } from "@/service/api";
import { notFound } from "next/navigation";
import style from "./product.module.css";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await Api.getById(id);
  if (!product) {
    return { title: "Produto não encontrado" };
  }
  return { title: product.title, description: product.description };
}
//uso o params para pegar o id do produto
//e fazer a busca na API, retornando o produto específico
//matendo os os recursos do SSG
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await Api.getById(id);
  if (!product) {
    return notFound();
  }
  return (
    <section className={style.container}>
      <CardDetails product={product} />
    </section>
  );
};

export default ProductDetails;

//Aplico o generateStaticParams para gerar as páginas estáticas
// e melhorar a performance do site, evitando o uso excessivo de SSG
export async function generateStaticParams() {
  const products = await Api.getAll();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
