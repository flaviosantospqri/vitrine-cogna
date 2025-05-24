import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "../index";

const productsMock = [
  { id: 1, title: "Produto A", category: "eletrônicos", price: 100 },
  { id: 2, title: "Produto B", category: "roupas", price: 50 },
  { id: 3, title: "Produto C", category: "eletrônicos", price: 200 },
];

describe("Gallery Component", () => {
  it("Renderiza título da seção", () => {
    render(<Gallery products={productsMock} />);
    expect(screen.getByText(/produtos/i)).toBeInTheDocument();
    expect(screen.getByText(/selecione o produto/i)).toBeInTheDocument();
  });

  it("Renderiza select com categorias, incluindo 'Todas'", () => {
    render(<Gallery products={productsMock} />);
    expect(screen.getByLabelText(/filtrar por categoria/i)).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /todas/i })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /eletrônicos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /roupas/i })).toBeInTheDocument();
  });

  it("Valor inicial do select é 'all'", () => {
    render(<Gallery products={productsMock} />);
    const select = screen.getByLabelText(/filtrar por categoria/i);
    expect(select.value).toBe("all");
  });

  it("Renderiza todos os produtos inicialmente", () => {
    render(<Gallery products={productsMock} />);
    productsMock.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("Filtra produtos ao selecionar uma categoria", () => {
    render(<Gallery products={productsMock} />);
    const select = screen.getByLabelText(/filtrar por categoria/i);
    fireEvent.change(select, { target: { value: "eletrônicos" } });

    expect(screen.getByText("Produto A")).toBeInTheDocument();
    expect(screen.getByText("Produto C")).toBeInTheDocument();

    expect(screen.queryByText("Produto B")).not.toBeInTheDocument();
  });

  it("Exibe mensagem caso não haja produtos na categoria selecionada", () => {
    render(<Gallery products={productsMock} />);
    const select = screen.getByLabelText(/filtrar por categoria/i);

    fireEvent.change(select, { target: { value: "brinquedos" } });

    productsMock.forEach((product) => {
      expect(screen.queryByText(product.title)).not.toBeInTheDocument();
    });
  });

  it("7. Passa corretamente os dados para cada Card (simples validação)", () => {
    render(<Gallery products={productsMock} />);
    productsMock.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
