import { describe, it, expect, vi } from "vitest";
import { formatCurrencyBr, formatCurrencyUSA } from "@/utils";

beforeAll(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});
describe("Utils - Currency Formatters", () => {
  describe("Success Cases", () => {
    it("formatCurrencyBr deve formatar corretamente para BRL", () => {
      const result = formatCurrencyBr(1234.56);
      expect(result).toBe("R$ 1.234,56");
    });

    it("formatCurrencyUSA deve formatar corretamente para USD", () => {
      const result = formatCurrencyUSA(1234.56);
      expect(result).toBe("$1,234.56");
    });
  });

  describe("Failure Cases", () => {
    it("formatCurrencyBr deve capturar erro e retornar o valor original", () => {
      const originalNumberFormat = Intl.NumberFormat;

      Intl.NumberFormat = vi.fn(() => {
        throw new Error("Mocked Error");
      });

      const value = 1000;
      const result = formatCurrencyBr(value);
      expect(result).toBe(value);

      Intl.NumberFormat = originalNumberFormat;
    });

    it("formatCurrencyUSA deve capturar erro e retornar o valor original", () => {
      const originalNumberFormat = Intl.NumberFormat;

      Intl.NumberFormat = vi.fn(() => {
        throw new Error("Mocked Error");
      });

      const value = 2000;
      const result = formatCurrencyUSA(value);
      expect(result).toBe(value);

      Intl.NumberFormat = originalNumberFormat;
    });
  });

  describe("Edge Cases", () => {
    it('formatCurrencyBr com NaN retorna "NaN"', () => {
      const result = formatCurrencyBr(NaN);
      expect(result).toBe("NaN");
    });

    it('formatCurrencyBr com null retorna "R$ 0,00"', () => {
      const result = formatCurrencyBr(null);
      expect(result).toBe("R$ 0,00");
    });

    it('formatCurrencyBr com undefined retorna "NaN"', () => {
      const result = formatCurrencyBr(undefined);
      expect(result).toBe("NaN");
    });

    it('formatCurrencyBr com Infinity retorna "R$ ∞"', () => {
      const result = formatCurrencyBr(Infinity);
      expect(result).toBe("R$ ∞");
    });

    it('formatCurrencyUSA com NaN retorna "NaN"', () => {
      const result = formatCurrencyUSA(NaN);
      expect(result).toBe("NaN");
    });

    it('formatCurrencyUSA com null retorna "$0.00"', () => {
      const result = formatCurrencyUSA(null);
      expect(result).toBe("$0.00");
    });

    it('formatCurrencyUSA com undefined retorna "NaN"', () => {
      const result = formatCurrencyUSA(undefined);
      expect(result).toBe("NaN");
    });

    it('formatCurrencyUSA com Infinity retorna "$∞"', () => {
      const result = formatCurrencyUSA(Infinity);
      expect(result).toBe("$∞");
    });
  });
});
