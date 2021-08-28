export default function calculateTotalCartPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) {
      return tally; //because products can be deleted from inventory, but they can still be in someone's cart!
    }

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
