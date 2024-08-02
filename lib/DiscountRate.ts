export function getPriceRate(price: number, discountPrice: number) {
  return Math.trunc(((price - discountPrice) / price) * 100);
}
