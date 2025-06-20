import Image from "next/image";
import React from "react";
import style from "./cardDetails.module.css";
import Link from "next/link";
import { formatCurrencyBr } from "@/utils";
const CardDetails = ({ product }) => {
  const formattedValue = formatCurrencyBr(product.price);
  return (
    <section className={style.container}>
      <article className={style.info_img}>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={`imagem representativa do produto ${product.title}`}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </article>
      <article className={style.info_product}>
        <h3 tabIndex={-1} autoFocus className={style.info_product_title}>
          {product.title}
        </h3>
        <p className={style.info_product_description}>{product.description}</p>
        <p className={style.info_product_category}>{product.category}</p>
        <p className={style.info_product_price}>
          {formattedValue ? formattedValue : product.price}
        </p>
        <p className={style.info_product_rating}>
          Avaliação:{" "}
          {product.rating.rate
            ? `${product.rating.rate}% de (${product.rating.count})`
            : "Este produto ainda não possui avaliações"}
        </p>

        {/*No momento, não há lógica de carrinho ou estoque implementada.
          Para evitar confundir o usuário, mantemos a mensagem "Fora do Estoque" fixa.
          Quando o sistema evoluir, podemos adaptar para refletir o estoque real. */}
        <p className={style.info_product_status}>Fora do Estoque</p>
        <Link href={"/"}>Voltar para a vitrine</Link>
      </article>
    </section>
  );
};

export default CardDetails;
