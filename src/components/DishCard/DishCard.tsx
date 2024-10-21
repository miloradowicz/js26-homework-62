import { FC } from 'react';
import { DishInfo } from '../../types';
import img_notFound from '../../assets/images/not-found.svg';

interface DishCardProps {
  info: DishInfo;
}

const DishCard: FC<DishCardProps> = ({ info: { title, description, price, imgUrl } }) => {
  return (
    <div className='card h-100'>
      <img src={imgUrl ?? img_notFound} alt={title} className='card-img-top' />
      <div className='card-body d-flex flex-column'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{description}</p>
        <p className='card-text fw-bold mt-auto'>от {price} сом</p>
      </div>
    </div>
  );
};

export default DishCard;
