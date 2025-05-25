import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "../index";
import { vi } from "vitest";

vi.mock("../../card", () => ({
  default: ({ product }) => <div data-testid="card">{product.title}</div>,
}));

const mockProducts = [
  { id: "1", title: "Tênis", category: "Esportes" },
  { id: "2", title: "Camisa", category: "Roupas" },
  { id: "3", title: "Bola", category: "Esportes" },
  { id: "4", title: "Boné", category: "Roupas" },
];

describe("Gallery Component", () => {
  it("renderiza o título e descrição do banner", () => {
    render(<Gallery products={mockProducts} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Produtos"
    );
    expect(
      screen.getByText(/Selecione o produto desejado/i)
    ).toBeInTheDocument();
  });

  it("renderiza o filtro de categorias com opção 'Todas' e categorias únicas", () => {
    render(<Gallery products={mockProducts} />);
    const select = screen.getByLabelText(/Filtrar por categoria/i);
    expect(select).toBeInTheDocument();

    expect(screen.getByRole("option", { name: "Todas" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Esportes" })
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Roupas" })).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    const optionNames = options.map((o) => o.textContent);
    const uniqueNames = Array.from(new Set(optionNames));
    expect(optionNames.length).toBe(uniqueNames.length);
  });

  it("por padrão exibe todos os produtos", () => {
    render(<Gallery products={mockProducts} />);
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(mockProducts.length);
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("filtra os produtos quando seleciona uma categoria", () => {
    render(<Gallery products={mockProducts} />);
    const select = screen.getByLabelText(/Filtrar por categoria/i);

    fireEvent.change(select, { target: { value: "Esportes" } });
    const filtered = mockProducts.filter((p) => p.category === "Esportes");

    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(filtered.length);
    filtered.forEach((p) =>
      expect(screen.getByText(p.title)).toBeInTheDocument()
    );

    expect(screen.queryByText("Camisa")).not.toBeInTheDocument();
  });

  it("seleciona a categoria 'Todas' e mostra todos os produtos", () => {
    render(<Gallery products={mockProducts} />);
    const select = screen.getByLabelText(/Filtrar por categoria/i);

    fireEvent.change(select, { target: { value: "Esportes" } });
    expect(screen.queryByText("Camisa")).not.toBeInTheDocument();

    fireEvent.change(select, { target: { value: "all" } });
    expect(screen.getByText("Camisa")).toBeInTheDocument();
    expect(screen.getAllByTestId("card").length).toBe(mockProducts.length);
  });

  it("o valor do filtro reflete a categoria selecionada", () => {
    render(<Gallery products={mockProducts} />);
    const select = screen.getByLabelText(/Filtrar por categoria/i);

    expect(select.value).toBe("all");

    fireEvent.change(select, { target: { value: "Roupas" } });
    expect(select.value).toBe("Roupas");
  });

  it("renderiza corretamente com lista de produtos vazia", () => {
    render(<Gallery products={[]} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText(/Filtrar por categoria/i)).toBeInTheDocument();
    expect(screen.queryByTestId("card")).not.toBeInTheDocument();
  });

  it("recalcula categorias quando produtos mudam", () => {
    const { rerender } = render(<Gallery products={mockProducts} />);
    expect(
      screen.getByRole("option", { name: "Esportes" })
    ).toBeInTheDocument();
    const newProducts = [{ id: "5", title: "Livro", category: "Educação" }];
    rerender(<Gallery products={newProducts} />);

    expect(
      screen.queryByRole("option", { name: "Esportes" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Educação" })
    ).toBeInTheDocument();
  });

  it("mantém a categoria selecionada ao mudar produtos se a categoria existir", () => {
    const { rerender } = render(<Gallery products={mockProducts} />);
    const select = screen.getByLabelText(/Filtrar por categoria/i);
    fireEvent.change(select, { target: { value: "Esportes" } });
    expect(select.value).toBe("Esportes");

    const updatedProducts = [
      { id: "10", title: "Tênis Novo", category: "Esportes" },
      { id: "11", title: "Bola Nova", category: "Esportes" },
    ];
    rerender(<Gallery products={updatedProducts} />);
    expect(select.value).toBe("Esportes");

    expect(screen.getByText("Tênis Novo")).toBeInTheDocument();
  });
});
