export const formatKES = (price: number): string => {
  return `KSh ${price.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
