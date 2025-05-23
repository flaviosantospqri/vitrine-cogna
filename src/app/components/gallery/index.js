import React from "react";
import Card from "../card";

const Gallery = ({ products }) => {
  return (
    <section>
      <h2>Produtos Exlusivos da Martech</h2>
      {products.map((el) => (
        <Card key={el.id} el={el} />
      ))}
    </section>
  );
};

export default Gallery;
