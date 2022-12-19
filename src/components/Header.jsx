import '../assets/App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className='section__header'>
      <Link className='mainApp__link' to='/'>
        <FontAwesomeIcon className='app__icon' icon={faBolt} /> arDB
      </Link>
      <nav className='nav'>
        <ul className='navList'>
          <li className='navList_items'>
            <Link className='navList_link' to='/'>
              Search
            </Link>
          </li>
          <li className='navList_items'>
            <Link className='navList_link' to='/about'>
              About
            </Link>
          </li>
          <li className='navList_items'>
            <Link className='navList_link btn_primary' to='/dev'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
