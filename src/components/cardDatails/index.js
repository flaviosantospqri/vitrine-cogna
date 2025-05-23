import Image from "next/image";
import React from "react";

const CardDetails = ({ product }) => {
  return (
    <article>
      <Image
        src={product.image}
        width={200}
        height={200}
        alt={`imagem representativa do produto ${product.title}`}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </article>
  );
};

export default CardDetails;
