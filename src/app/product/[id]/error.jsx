"use client";

import Link from "next/link";
// Usando o error.js para capturar o erro
// e exibir uma mensagem personalizada para o usuário
// e redirecionar para a galeria
// Desta forma, posso usar um serviço de monitoramento de erros
// e ter um controle melhor do que está acontecendo
export default function Error({ error }) {
  console.error("Erro capturado na rota [id]:", error);

  return (
    <div>
      <h2>Ocorreu um erro ao carregar o produto.</h2>
      <Link href={"/"}>Voltar a Galeria</Link>
    </div>
  );
}
