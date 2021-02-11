const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD"
});

export default function fromatCurrency(amount) {
  return formatter.format(amount);
}
