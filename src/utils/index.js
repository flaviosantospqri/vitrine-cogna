/**
 * Converte o valor monetário para o formato de moeda brasileiro (BRL).
 * @param {number} value - Valor monetário a ser formatado.
 * @return {string} Valor formatado como moeda brasileira.
 * @throws {Error} Se ocorrer um erro ao formatar o valor.
 */

export const formatCurrencyBr = (value) => {
  const num = parseFloat(
    typeof value === "string" ? value.replace(",", ".") : value
  );

  if (typeof num !== "number" || isNaN(num)) {
    console.error("Invalid value for currency formatting:", value);
    return value;
  }
  try {
    const options = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("pt-BR", options).format(num);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return value;
  }
};

/**
 * Converte o valor monetário para o formato de moeda americana (USD).
 * @param {number} value - Valor monetário a ser formatado.
 * @return {string} Valor formatado como moeda americana.
 * @throws {Error} Se ocorrer um erro ao formatar o valor.
 */

export const formatCurrencyUSA = (value) => {
  const num = parseFloat(
    typeof value === "string" ? value.replace(",", ".") : value
  );
  if (typeof num !== "number" || isNaN(num)) {
    console.error("Invalid value for currency formatting:", value);
    return value;
  }
  try {
    const options = {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("en-US", options).format(num);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return value;
  }
};
