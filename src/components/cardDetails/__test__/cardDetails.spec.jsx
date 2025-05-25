import { render, screen } from "@testing-library/react";
import CardDetails from "../index";
import { vitest } from "vitest";

const mockProduct = {
  title: "Tênis Esportivo",
  description: "Um ótimo tênis para corrida e esportes.",
  category: "Esportes",
  price: 99.9,
  image: "/tenis.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

vitest.mock("@/utils", () => ({
  formatCurrencyBr: (price) => `R$ ${price.toFixed(2).replace(".", ",")}`,
}));

describe("CardDetails Component", () => {
  it("renderiza o título do produto", () => {
    render(<CardDetails product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("renderiza o preço formatado corretamente", () => {
    render(<CardDetails product={mockProduct} />);
    expect(screen.getByText(/R\$[\s\u00A0]?99,90/)).toBeInTheDocument();
  });

  it("renderiza o link de voltar com href correto", () => {
    render(<CardDetails product={mockProduct} />);
    const link = screen.getByRole("link", { name: /voltar para a vitrine/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
