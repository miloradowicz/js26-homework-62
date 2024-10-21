import { FC } from 'react';
import { CartItemInfo } from '../../types';
import CartItem from './CartItem/CartItem';

interface CartProps {
  items: CartItemInfo[];
}

const Cart: FC<CartProps> = ({ items }) => {
  return (
    <div>
      {items.length ? (
        <>
          <h3>Ваша корзина:</h3>
          <ul className='list-group'>
            {items.map((x, i) => (
              <CartItem key={i} item={x} />
            ))}
          </ul>
        </>
      ) : (
        <h3>Ваша корзина пуста</h3>
      )}
    </div>
  );
};

export default Cart;
