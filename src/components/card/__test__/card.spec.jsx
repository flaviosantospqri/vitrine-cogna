import { render, screen } from "@testing-library/react";
import Card from "../index";

const mockProduct = {
  id: "1",
  title: "Tênis Esportivo",
  price: 99.9,
  image: "/tenis.jpg",
  category: "sports",
};

describe("Card Component", () => {
  it("renderiza o título do produto", () => {
    render(<Card product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("renderiza o preço formatado corretamente", () => {
    render(<Card product={mockProduct} />);
    expect(screen.getByText(/R\$[\s\u00A0]?99,90/)).toBeInTheDocument();
  });

  it("renderiza o link com href correto", () => {
    render(<Card product={mockProduct} />);
    const link = screen.getByRole("link", { name: /ver detalhes/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `product/${mockProduct.id}`);
  });
});
