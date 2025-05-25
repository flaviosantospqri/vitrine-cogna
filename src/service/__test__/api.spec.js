import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Api } from "../../service/api"; // ajuste o caminho conforme seu projeto

beforeAll(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});
describe("Api", () => {
  const OLD_ENV = process.env;
  const BASE_URL = "https://fakeapi.com/products";

  beforeEach(() => {
    global.fetch = vi.fn();
    process.env = {
      ...OLD_ENV,
      NEXT_PUBLIC_API_URL: BASE_URL,
    };
  });

  afterEach(() => {
    vi.resetAllMocks();
    process.env = OLD_ENV;
  });

  // --- getAll tests ---

  it("getAll deve chamar fetch com a URL correta", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    await Api.getAll();

    expect(fetch).toHaveBeenCalledWith(BASE_URL, {
      next: { revalidate: 60000 },
    });
  });

  it("getAll deve retornar lista de produtos em sucesso", async () => {
    const mockData = [{ id: 1, name: "Produto 1" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await Api.getAll();
    expect(result).toEqual(mockData);
  });

  it("getAll deve lançar erro se response.ok for falso", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    await expect(Api.getAll()).rejects.toThrow(
      /API respondeu com erro: 500 Internal Server Error/
    );
  });

  it("getAll deve lançar erro se fetch falhar", async () => {
    fetch.mockRejectedValueOnce(new Error("Erro de rede"));

    await expect(Api.getAll()).rejects.toThrow(
      /Falha ao buscar produtos: Erro de rede/
    );
  });

  it("getAll lança erro se URL não estiver configurada", async () => {
    process.env.NEXT_PUBLIC_API_URL = "";

    await expect(Api.getAll()).rejects.toThrow();

    process.env.NEXT_PUBLIC_API_URL = BASE_URL; // restaura para os próximos testes
  });

  // --- getById tests ---

  it("getById deve lançar erro se id não for informado", async () => {
    await expect(Api.getById("")).rejects.toThrow(
      /ID do produto é obrigatório/
    );
    await expect(Api.getById(null)).rejects.toThrow(
      /ID do produto é obrigatório/
    );
    await expect(Api.getById(undefined)).rejects.toThrow(
      /ID do produto é obrigatório/
    );
  });

  it("getById deve chamar fetch com URL correta para o id", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: "123", name: "Produto 123" }),
    });

    await Api.getById("123");

    expect(fetch).toHaveBeenCalledWith("https://fakeapi.com/products/123", {
      next: { revalidate: 60000 },
    });
  });

  it("getById deve retornar o produto correto", async () => {
    const mockProduct = { id: "abc", name: "Produto ABC" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const result = await Api.getById("abc");
    expect(result).toEqual(mockProduct);
  });

  it("getById deve lançar erro se response.ok for falso", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    await expect(Api.getById("999")).rejects.toThrow(
      /API respondeu com erro: 404 Not Found/
    );
  });

  it("getById deve lançar erro se fetch falhar", async () => {
    fetch.mockRejectedValueOnce(new Error("Erro de conexão"));

    await expect(Api.getById("555")).rejects.toThrow(
      /Falha ao buscar produto ID=555: Erro de conexão/
    );
  });

  it("getById lança erro se URL base não estiver configurada", async () => {
    process.env.NEXT_PUBLIC_API_URL = "";

    await expect(Api.getById("123")).rejects.toThrow();

    process.env.NEXT_PUBLIC_API_URL = BASE_URL;
  });

  // --- revalidate & env tests ---

  it("getAll deve usar o revalidate configurado", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    await Api.getAll();

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      next: { revalidate: 60000 },
    });
  });

  it("getById deve usar o revalidate configurado", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    await Api.getById("1");

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      next: { revalidate: 60000 },
    });
  });

  it("BASE_URL deve ser pego do env corretamente", () => {
    expect(process.env.NEXT_PUBLIC_API_URL).toBe(
      "https://fakeapi.com/products"
    );
  });

  // --- edge cases ---

  it("getById aceita id numérico convertido para string", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: "42" }),
    });

    const result = await Api.getById(42);
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/42`, {
      next: { revalidate: 60000 },
    });
    expect(result).toEqual({ id: "42" });
  });

  it("getAll retorna array vazio se API retornar vazio", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const result = await Api.getAll();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it("getAll trata retorno inesperado (null)", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => null,
    });

    const result = await Api.getAll();
    expect(result).toBeNull();
  });

  it("getById trata retorno inesperado (null)", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => null,
    });

    const result = await Api.getById("idqualquer");
    expect(result).toBeNull();
  });
});
