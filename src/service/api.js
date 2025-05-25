/**
 * Api - interface para comunicação com a API externa.
 * @module Api
 */
export const Api = {
  /**
   * Busca todos os produtos da API.
   * @returns {Promise<Array>} Lista de produtos.
   * @throws {Error} Caso a requisição falhe ou o retorno seja inválido.
   */
  async getAll() {
    // Variáveis de ambiente para controle centralizado da API e cache
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const REVALIDATE = 60000; // tempo em ms para revalidação do cache (60s)

    try {
      const response = await fetch(BASE_URL, {
        // Next.js ISR revalidation (incremental static regeneration)
        next: { revalidate: REVALIDATE },
      });

      if (!response.ok) {
        // Mensagem clara e com status HTTP para facilitar debug
        throw new Error(
          `API respondeu com erro: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Repassa o erro para a camada de quem chamou a API, já com mensagem contextual
      throw new Error(`Falha ao buscar produtos: ${error.message}`);
    }
  },

  /**
   * Busca um produto específico pelo ID.
   * @param {string} id - Identificador do produto.
   * @returns {Promise<Object>} Produto encontrado.
   * @throws {Error} Caso a requisição falhe ou o produto não seja encontrado.
   */
  async getById(id) {
    // Variáveis de ambiente para controle centralizado da API e cache
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const REVALIDATE = 60000; // tempo em ms para revalidação do cache (60s)

    if (!id) {
      throw new Error("ID do produto é obrigatório para busca");
    }

    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        next: { revalidate: REVALIDATE },
      });

      if (!response.ok) {
        throw new Error(
          `API respondeu com erro: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Falha ao buscar produto ID=${id}: ${error.message}`);
    }
  },
};
