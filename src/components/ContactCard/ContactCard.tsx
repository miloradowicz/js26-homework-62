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
        <h6 className='card-subtitle mb-3'>{address}</h6>
        <p className='card-text'>
          <span className='fw-semibold d-block mb-1'>Доставка</span>
          {deliveryHours}
        </p>
        <span className='fw-semibold d-block mb-1'>Ресторан и самовывоз</span>
        <p className='card-text'>{openHours}</p>
      </div>
    </div>
  );
};

export default ContactCard;
