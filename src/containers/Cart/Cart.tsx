import { FC } from 'react';
import { CartItemInfo } from '../../types';
import CartItem from './CartItem/CartItem';

interface CartProps {
  items: CartItemInfo[];
}

const Cart: FC<CartProps> = ({ items }) => {
  return (
    <div>
      <h3>Ваша корзина:</h3>
      <ul className='list-group'>
        {items.map((x, i) => (
          <CartItem key={i} item={x} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
