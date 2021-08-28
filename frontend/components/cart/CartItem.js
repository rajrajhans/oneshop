import formatPrice from '../../utils/formatPrice';
import { DeleteFromCartBtn, StyledCartItem } from './StyledCartItem';
import useRemoveFromCart from './useRemoveFromCart';
import { useLoadingContext } from '../LoadingContext';
import ErrorMessage from '../ErrorMessage';
import { CartStateContext } from './CartState';

export const CartItem = ({ cartItem }) => {
  const { product } = cartItem;
  const { deleteCartItem, error } = useRemoveFromCart(cartItem.id);
  const { toggleIsLoading } = useLoadingContext();
  const { decrementCartCount } = CartStateContext();

  const handleCartItemDelete = async () => {
    toggleIsLoading(true);
    await deleteCartItem();
    decrementCartCount(cartItem.quantity);
    toggleIsLoading(false);
  };

  return (
    <StyledCartItem>
      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
        width={100}
      />
      <div>
        <h4>{product.name.slice(0, 50)}</h4>
        <p>
          {formatPrice(product.price * cartItem.quantity)}
          <em>
            - {cartItem.quantity} &times; {formatPrice(product.price)}
          </em>
        </p>
        <ErrorMessage error={error} />
      </div>
      <DeleteFromCartBtn onClick={handleCartItemDelete}>
        &times;
      </DeleteFromCartBtn>
    </StyledCartItem>
  );
};
