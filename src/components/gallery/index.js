import React from "react";
import Card from "../card";
import style from "./gallery.module.css";

const Gallery = ({ products }) => {
  return (
    <div className={style.container}>
      <section className={style.banner}>
        <h2>Produtos</h2>
        <p>Selecione o produto desejado e veja mais detalhes.</p>
      </section>
      <section className={style.grid}>
        {products.map((el) => (
          <Card key={el.id} el={el} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
