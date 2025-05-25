import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./card.module.css";
import { formatCurrencyBr } from "@/utils";
import Skeleton from "../skeleton";

const Card = ({ product, skeletonDelay = 100 }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  //Uso um pequeno delay para o skeleton ser perceptível por algum momento
  //até mesmo em internet rápida, sem impactar na UX
  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), skeletonDelay);
    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton || !product) return <Skeleton />;

  const formattedValue = formatCurrencyBr(product.price);
  return (
    <section className={style.container}>
      <article className={style.container_img}>
        <Image
          loading="lazy"
          src={product.image}
          width={250}
          height={250}
          alt={`imagem representativa do produto ${product.title}`}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </article>
      <h3>{product.title}</h3>
      <p>{formattedValue ? formattedValue : product.price}</p>
      <Link href={`product/${product.id}`}>Ver Detalhes</Link>
    </section>
  );
};

export default Card;
