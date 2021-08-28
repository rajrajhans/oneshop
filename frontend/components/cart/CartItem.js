import formatPrice from '../../utils/formatPrice';
import { StyledCartItem } from './StyledCartItem';

export const CartItem = ({ cartItem }) => {
  const { product } = cartItem;
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
      </div>
    </StyledCartItem>
  );
};
