"use client";

import React, { useState, useMemo } from "react";
import Card from "../card";
import style from "./gallery.module.css";

//Usei o use client para garantir que o componente seja renderizado no lado do cliente
//e possa utilizar hooks como useState e useMemo
//Não mentem mais o os recursos do SSG, pois a galeria de produtos
//depende de interações do usuário, como a seleção de categorias, mas ainda é
//otimizada para o SEO com o uso de JSON-LD na página de detalhes do produto.

const Gallery = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Faço uso do useMemo para criar a lista de categorias
  // evitando re-renderizações desnecessárias e garantindo que a lista
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return ["all", ...Array.from(new Set(cats))];
  }, [products]);

  //Faço uso do useMemo para filtrar os produtos com base na categoria selecionada
  //Cuidando para que a lista de categorias seja atualizada sempre que os produtos mudarem
  //e evitando re-renderizações desnecessárias
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className={style.container}>
      <section className={style.banner}>
        <h2>Produtos</h2>
        <p>Selecione o produto desejado e veja mais detalhes.</p>

        <label htmlFor="categoryFilter">Filtrar por categoria:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "Todas" : cat}
            </option>
          ))}
        </select>
      </section>

      <section className={style.grid}>
        {filteredProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
