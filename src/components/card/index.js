import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./card.module.css";
import { formatCurrencyBr } from "@/utils";

const Card = ({ product }) => {
  const formattedValue = formatCurrencyBr(product.price);
  return (
    <article className={style.container}>
      <Image
        src={product.image}
        width={300}
        height={200}
        alt={`imagem representativa do produto ${product.title}`}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        style={{ objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>{formattedValue ? formattedValue : product.price}</p>
      <Link href={`product/${product.id}`}>Ver detalhes</Link>
    </article>
  );
};

export default Card;
