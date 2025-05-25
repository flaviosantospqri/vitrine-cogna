import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./card.module.css";
import { formatCurrencyBr } from "@/utils";
import Skeleton from "../skeleton";

const Card = ({ product }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  //Uso um pequeno delay para o skeleton ser perceptível por algum momento
  //até mesmo em internet rápida, sem impactar na UX
  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton || !product) return <Skeleton />;

  const formattedValue = formatCurrencyBr(product.price);
  return (
    <article className={style.container}>
      <Image
        loading="lazy"
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
