export const priceToString = (price) => {
  if (price === 0) {
    return 0;
  }
  if (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
