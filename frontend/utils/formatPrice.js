export default function formatPrice(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  };

  const formatter = Intl.NumberFormat('en-IN', options);

  return formatter.format(amount);
}
