import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Toolbar = () => {
  return (
    <>
      <nav className='navbar bg-light px-5'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand col-2'>
            <img src={logo} alt='Dodo pizza - лучшая пицца для додиков' />
          </Link>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about-us' className='nav-link'>
                About Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contacts' className='nav-link'>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
