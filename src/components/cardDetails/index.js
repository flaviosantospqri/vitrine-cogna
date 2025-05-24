import Image from "next/image";
import React from "react";
import style from "./cardDetails.module.css";
import Link from "next/link";
const CardDetails = ({ product }) => {
  return (
    <section className={style.container}>
      <article className={style.info_img}>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={`imagem representativa do produto ${product.title}`}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </article>
      <article className={style.info_product}>
        <h3 className={style.info_product_title}>{product.title}</h3>
        <p className={style.info_product_description}>{product.description}</p>
        <p className={style.info_product_category}>{product.category}</p>
        <p className={style.info_product_price}>{product.price}</p>
        <p className={style.info_product_rating}>
          Avaliação: {product.rating.rate} ({product.rating.count})
        </p>
        <p className={style.info_product_status}>Fora do Estoque</p>
        <Link href={"/"}>Voltar para a vitrine</Link>
      </article>
    </section>
  );
};

export default CardDetails;
