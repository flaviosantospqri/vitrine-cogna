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
    const REVALIDATE = 60000;

    try {
      const response = await fetch(BASE_URL, {
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
      console.error("Ocorreu um erro" + error.message);
      return [];
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
    const REVALIDATE = 60000;

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
      console.error(
        `Ocorreu um erro o ${id} não foi encontrado` + error.message
      );
      return [];
    }
  },
};
