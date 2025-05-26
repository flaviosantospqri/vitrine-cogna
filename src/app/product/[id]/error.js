// Usando o error.js para capturar o erro
// e exibir uma mensagem personalizada para o usuário
// e redirecionar para a galeria
// Desta forma, posso usar um serviço de monitoramento de erros
// e ter um controle melhor do que está acontecendo
"use client";
import { useEffect } from "react";
import style from "./product.module.css";
const Error = () => {
  return (
    <section className={style.error_page}>
      <h2>Produto não encontrado</h2>
      <p>Este produto não existe ou ainda não está disponível.</p>
      <a href="/">Voltar para a galeria</a>
    </section>
  );
};
export default Error;
