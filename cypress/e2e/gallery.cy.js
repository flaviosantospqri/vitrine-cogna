//Dois testes simples para verificar se a galeria de produtos está carregando corretamente e se o filtro de categoria está funcionando.
//O primeiro teste verifica se a galeria de produtos está carregando corretamente e se os produtos estão visíveis.
//O segundo teste verifica se o filtro de categoria está funcionando corretamente, olhando a quantidade de produtos exibidos antes
//e depois de aplicar o filtro.

describe("Galeria de Produtos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("deve carregar a galeria com produtos visíveis", () => {
    cy.get("select#categoryFilter").should("exist");
    cy.get("[data-testid=card]").should("have.length.greaterThan", 0);
    cy.get("[data-testid=card]").first().should("contain.text", "Ver detalhes");
  });

  it("deve filtrar produtos pela categoria", () => {
    cy.get("select#categoryFilter").select("all");
    cy.get("[data-testid=card]").then((cardsAll) => {
      const countAll = cardsAll.length;

      cy.get("select#categoryFilter").select("electronics");
      cy.get("[data-testid=card]").should("have.length.lessThan", countAll);

      cy.get("[data-testid=card]")
        .first()
        .should("contain.text", "Ver detalhes");
    });
  });
});
