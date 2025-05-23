import Image from "next/image";
import React from "react";

const Gallery = ({ products }) => {
  return (
    <section>
      <h2>Produtos Exlusivos da Martech</h2>
      {products.map((el) => (
        <article key={el.id}>
          <Image
            src={el.image}
            width={200}
            height={200}
            alt={`imagem representativa do produto ${el.title}`}
          />
          <h3>{el.title}</h3>
          <p>{el.price}</p>
          <button>Ver detalhes</button>
        </article>
      ))}
    </section>
  );
};

export default Gallery;
