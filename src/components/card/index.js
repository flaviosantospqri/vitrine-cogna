import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./card.module.css";

const Card = ({ el }) => {
  return (
    <article className={style.container}>
      <Image
        src={el.image}
        width={300}
        height={200}
        alt={`imagem representativa do produto ${el.title}`}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        style={{ objectFit: "cover" }}
      />
      <h3>{el.title}</h3>
      <p>{el.price}</p>
      <Link href={`product/${el.id}`}>Ver detalhes</Link>
    </article>
  );
};

export default Card;
