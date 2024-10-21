import { FC } from 'react';
import { ContactInfo } from '../../types';
import ContactCard from '../../components/ContactCard/ContactCard';

interface ContactsProps {
  contacts: ContactInfo[];
}

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2'>
      {contacts.map((x) => (
        <div key={x.id} className='col'>
          <ContactCard info={x} />
        </div>
      ))}
    </div>
  );
};

export default Contacts;
