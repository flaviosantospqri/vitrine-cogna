import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ el }) => {
  return (
    <article>
      <Image
        src={el.image}
        width={200}
        height={200}
        alt={`imagem representativa do produto ${el.title}`}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
      />
      <h3>{el.title}</h3>
      <p>{el.price}</p>
      <Link href={`product/${el.id}`}>Ver detalhes</Link>
    </article>
  );
};

export default Card;
