import Image from "next/image";
import React from "react";

const Card = ({ el }) => {
  return (
    <article>
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
  );
};

export default Card;
