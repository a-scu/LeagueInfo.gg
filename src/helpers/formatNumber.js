export const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else if (number < 10000) {
    return (number / 1000).toFixed(3).replace(".", ",");
  } else if (number < 1000000) {
    return (number / 1000).toFixed(3).replace(".", ",");
  }
};
