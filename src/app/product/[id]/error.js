"use client";
// Usando o error.js para capturar o erro
// e exibir uma mensagem personalizada para o usuário
// e redirecionar para a galeria
// Desta forma, posso usar um serviço de monitoramento de erros
// e ter um controle melhor do que está acontecendo
export default function Error({ error }) {
  console.error("Erro capturado na rota [id]:", error);

  return (
    <article>
      <h2>Ocorreu um erro ao carregar o produto.</h2>
      <p>Parece que está tentando acessar um produto, que ainda não temos. </p>
      <p>Mas fique tranquilo... Amanhã estará disponível</p>
      <a href={"/"}>Voltar a Galeria</a>
    </article>
  );
}
