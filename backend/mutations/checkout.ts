import { KeystoneContext } from '@keystone-next/types';
import stripeConfig from '../utils/stripe';

export default async function checkout(
  root: any,
  { token }: { token: string },
  context: KeystoneContext,
) {
  /*
        1. Make sure user is signed in
        2. Calculate the total price for their order
        3. Create the payment with the stripe library
        4. Convert the cartItems to OrderItems
        5. Create the order and return it
      */
  const userId = context.session.itemId;
  if (!userId) {
    throw new Error('You must be signed in!');
  }

  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: `
      id
      name
      email
      cart{
        id
        quantity
        product {
          name 
          price
          description
          id 
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `,
  });

  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const totalPrice = cartItems.reduce((tally, cartItem) => {
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);

  const charge = await stripeConfig.paymentIntents
    .create({
      amount: totalPrice,
      currency: 'INR',
      confirm: true,
      payment_method: token,
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
}
