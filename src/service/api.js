// Criei variáveis de Ambiente para melhor controle
// e evitar exposição no client Side.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE = 60000;

/**
 * Exporta a conexão com a API, listando os métodos disponíveis.
 * @module Api
 * @typedef {Object} Api
 * @property {function} getAll - Busca todos os dados da API.
 * @property {function} getById - Busca um produto específico pelo ID.
 */
export const Api = {
  /**
   * Busca todos os dados da API
   * @returns {Promise<Array>} Array de produtos.
   * @throws {Error} Tratamento de erros.
   */
  async getAll() {
    try {
      const response = await fetch(`${BASE_URL}`, {
        next: { revalidate: REVALIDATE },
      });
      if (!response.ok) {
        throw new Error(
          "A api respondeu, mas houve algum problema com os dados" +
            response.statusText
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        "Ocorreu uma falha ao buscar os produtos" + error.message
      );
    }
  },

  /**
   * Busca produto específico pelo ID.
   * @param {string} id - ID do produto a ser buscado.
   * @throws {Error} Tratamento de erros.
   * @returns {Promise<Object>} Objeto do produto.
   */
  async getById(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        next: { revalidate: REVALIDATE },
      });
      if (!response.ok) {
        throw new Error(
          "A api respondeu, mas houve algum problema com os dados" +
            response.statusText
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        "Ocorreu uma falha ao buscar os produtos" + error.message
      );
    }
  },
};
