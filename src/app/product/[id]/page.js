import { Api } from "@/app/service/api";
import { notFound } from "next/navigation";
import React from "react";

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
    <section>
      <article>
        <h3>{product.title}</h3>
      </article>
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
