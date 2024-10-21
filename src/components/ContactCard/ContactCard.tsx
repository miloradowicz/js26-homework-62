import { FC } from 'react';
import { ContactInfo } from '../../types';

interface ContactCardProps {
  info: ContactInfo;
}

const ContactCard: FC<ContactCardProps> = ({ info: { title, address, openHours, deliveryHours } }) => {
  return (
    <div className='card h-100'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p>
          <h6 className='card-subtitle'>{address}</h6>
        </p>
        <p className='card-text'>
          <h6>Доставка</h6>
          {deliveryHours}
        </p>
        <h6>Ресторан и самовывоз</h6>
        <p className='card-text'>{openHours}</p>
      </div>
    </div>
  );
};

export default ContactCard;
