export default function formatPrice(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat('en-IN', options);

  return formatter.format(amount);
}
