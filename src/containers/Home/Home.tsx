import { FC } from 'react';
import DishCard from '../../components/DishCard/DishCard';
import { DishInfo } from '../../types';

interface HomeProps {
  dishes: DishInfo[];
}

const Home: FC<HomeProps> = ({ dishes }) => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2'>
      {dishes.map((x) => (
        <div className='col'>
          <DishCard key={x.id} info={x} />
        </div>
      ))}
    </div>
  );
};

export default Home;
