import React from "react";
import style from "./page.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <article className={style.notfound}>
      <h3>Página não encontrada</h3>
      <p>Você tentou acessar uma página que não está disponível</p>
      <Link href={"/"}>Retornar a Home</Link>
    </article>
  );
};

export default NotFound;
