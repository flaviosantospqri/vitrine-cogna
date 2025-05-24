import { formatCurrencyBr, formatCurrencyUSA } from "../index";

describe("formatCurrencyBr", () => {
  test("formata valor positivo corretamente", () => {
    expect(formatCurrencyBr(1234.56)).toBe("R$ 1.234,56");
  });

  test("formata valor zero corretamente", () => {
    expect(formatCurrencyBr(0)).toBe("R$ 0,00");
  });

  test("formata valor negativo corretamente", () => {
    expect(formatCurrencyBr(-50.5)).toBe("-R$ 50,50");
  });

  test("trata string numérica convertendo para NaN e formatando", () => {
    expect(formatCurrencyBr("1234")).toBe("R$ 1.234,00");
  });

  test("retorna valor original se lançar erro", () => {
    // Força erro passando objeto inválido
    const badValue = { foo: "bar" };
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(formatCurrencyBr(badValue)).toBe(badValue);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Invalid value for currency formatting:",
      badValue
    );

    consoleSpy.mockRestore();
  });
});

describe("formatCurrencyUSA", () => {
  test("formata valor positivo corretamente", () => {
    expect(formatCurrencyUSA(1234.56)).toBe("$1,234.56");
  });

  test("formata valor zero corretamente", () => {
    expect(formatCurrencyUSA(0)).toBe("$0.00");
  });

  test("formata valor negativo corretamente", () => {
    expect(formatCurrencyUSA(-50.5)).toBe("-$50.50");
  });

  test("trata string numérica convertendo para NaN e formatando", () => {
    expect(formatCurrencyUSA("1234")).toBe("$1,234.00");
  });

  test("retorna valor original se lançar erro", () => {
    const badValue = { foo: "bar" };
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(formatCurrencyUSA(badValue)).toBe(badValue);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Invalid value for currency formatting:",
      badValue
    );

    consoleSpy.mockRestore();
  });
});
