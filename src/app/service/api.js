// Criei variáveis de Ambiente para melhor controle
// e evitar exposição no client Side.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE = 60;

/**
 * Exporta a conexão com a API, para melhor uso do SSG
 * @export {getAll()} método para buscar dos dados na API.
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
