import { FC } from 'react';
import { CartItemInfo } from '../../../types';

interface CartItemProps {
  item: CartItemInfo;
}

const CartItem: FC<CartItemProps> = ({ item: { dish, qty } }) => {
  return (
    <li className='list-group-item'>
      <div className='row'>
        <div className='col-8'>{dish.title}</div>
        <div className='col-4'>x{qty}</div>
      </div>
    </li>
  );
};

export default CartItem;
