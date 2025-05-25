// Usando o error.js para capturar o erro
// e exibir uma mensagem personalizada para o usuário
// e redirecionar para a galeria
// Desta forma, posso usar um serviço de monitoramento de erros
// e ter um controle melhor do que está acontecendo

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Erro capturado na rota [id]:", error);
  }, [error]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <article style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Ocorreu um erro ao carregar o produto.</h2>
      <p>Parece que está tentando acessar um produto, que ainda não temos.</p>
      <p>Mas fique tranquilo... Amanhã estará disponível.</p>

      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#555" }}>
        Você será redirecionado para a galeria em alguns segundos...
      </p>
    </article>
  );
}
