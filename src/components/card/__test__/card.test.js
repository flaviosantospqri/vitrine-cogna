import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../index";

const productMock = {
  id: "1",
  title: "Produto Teste",
  price: 199.99,
  image: "/test-image.jpg",
};

describe("Card Component", () => {
  it("deve renderizar o título do produto", () => {
    render(<Card product={productMock} />);
    const titleElement = screen.getByText(productMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("deve renderizar o preço formatado do produto", () => {
    render(<Card product={productMock} />);

    const priceElement = screen.getByText((content, element) =>
      content.includes("R$ 199,99")
    );
    expect(priceElement).toBeInTheDocument();
  });
});
