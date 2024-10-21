import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FC } from 'react';

interface ToolbarProps {
  cartCount: number;
}

const Toolbar: FC<ToolbarProps> = ({ cartCount }) => {
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
                Главная
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about-us' className='nav-link'>
                О нас
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contacts' className='nav-link'>
                Контакты
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cart' className='nav-link'>
                Корзина{cartCount ? <span className='badge text-bg-secondary'>{cartCount}</span> : null}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
