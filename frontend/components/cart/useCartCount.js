import { useUser } from '../../utils/useUser';

export default function useCartCount() {
  const currentUser = useUser();

  const getCartCount = () => {
    return currentUser.cart.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  };

  return { getCartCount };
}
