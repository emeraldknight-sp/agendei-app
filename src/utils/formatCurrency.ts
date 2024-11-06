export const formatCurrency = (
  number: number,
  locale: string = "pt-BR",
  currency: string = "BRL"
) => {
  return number.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
