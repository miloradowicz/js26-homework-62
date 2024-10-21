import { FC, memo } from 'react';
import DishCard from '../../components/DishCard/DishCard';
import { DishInfo } from '../../types';

interface HomeProps {
  dishes: DishInfo[];
  addToCart: (_: DishInfo) => void;
}

const Home: FC<HomeProps> = ({ dishes, addToCart }) => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2'>
      {dishes.map((x) => (
        <div key={x.id} className='col'>
          <DishCard info={x} addToCart={() => addToCart(x)} />
        </div>
      ))}
    </div>
  );
};

export default memo(Home);
