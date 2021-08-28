export default function useCartCount(cart) {
  const getCartCount = () => {
    return cart.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  };

  return { getCartCount };
}
