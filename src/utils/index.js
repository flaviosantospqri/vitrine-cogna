export const formatCurrencyBr = (value) => {
  try {
    const options = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("pt-BR", options).format(value);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return value;
  }
};

export const formatCurrencyUSA = (value) => {
  try {
    const options = {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("en-US", options).format(value);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return value;
  }
};
