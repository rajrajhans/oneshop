import { KeystoneContext } from '@keystone-next/types';

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext,
) {
  /*
   * 1. Query the current user to see if they are signed in
   * 2. Query the current user's cart
   * 3. See if the cart item that we are adding is already in their cart
   *    4. if it is, then just increment it's quantity by 1
   *    5. if it is not, then create a new cart item
   */

  const session = context.session;

  if (!session.itemId) {
    throw new Error('You must be logged in!');
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: session.itemId }, product: { id: productId } },
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  } else {
    return await context.lists.CartItem.createOne({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        user: {
          connect: {
            id: session.itemId,
          },
        },
      },
    });
  }
}
