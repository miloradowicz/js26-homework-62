import { FC } from 'react';
import { DishInfo } from '../../types';
import img_notFound from '../../assets/images/not-found.svg';

interface DishCardProps {
  info: DishInfo;
  addToCart: () => void;
}

const DishCard: FC<DishCardProps> = ({ info: { title, description, price, imgUrl }, addToCart }) => {
  return (
    <div className='card h-100'>
      <img src={imgUrl ?? img_notFound} alt={title} className='card-img-top' />
      <div className='card-body d-flex flex-column'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{description}</p>
        <div className='row row-cols-2 mt-auto align-items-center'>
          <div className='col card-text fw-bold'>{price} сом</div>
          <button className='col btn btn-primary' onClick={addToCart}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
