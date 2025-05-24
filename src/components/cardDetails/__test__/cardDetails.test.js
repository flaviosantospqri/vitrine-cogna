import React from "react";
import { render, screen } from "@testing-library/react";
import CardDetails from "../index";

const productMock = {
  image: "/test-image.jpg",
  title: "Produto Teste",
  description: "Descrição do produto",
  category: "Categoria Teste",
  price: 199.99,
  rating: {
    rate: 4.5,
    count: 10,
  },
};

test("renderiza os detalhes do produto corretamente", () => {
  render(<CardDetails product={productMock} />);

  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    productMock.title
  );
  expect(screen.getByText(productMock.description)).toBeInTheDocument();
  expect(screen.getByText(productMock.category)).toBeInTheDocument();
  expect(screen.getByText(/Avaliação:/)).toHaveTextContent(
    "Avaliação: 4.5 (10)"
  );
  expect(screen.getByText("Fora do Estoque")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /voltar para a vitrine/i })
  ).toBeInTheDocument();
});
