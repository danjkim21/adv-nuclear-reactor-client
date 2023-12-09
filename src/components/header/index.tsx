import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '@uidotdev/usehooks';
import { UserDataInterface } from '../../types/user';
import { Dispatch } from 'react';

function Header() {
  const [userData, setUserData]: [
    UserDataInterface,
    Dispatch<UserDataInterface>
  ] = useLocalStorage<any>('userData', null);

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
            <Link className='navList_link' to='/reactors'>
              Reactors
            </Link>
          </li>
          <li className='navList_items'>
            <Link className='navList_link' to='/about'>
              About
            </Link>
          </li>
          <li className='navList_items'>
            {userData?.authenticated ? (
              <Link className='navList_link btn_primary' to='/dashboard'>
                Dashboard
              </Link>
            ) : (
              <Link className='navList_link btn_primary' to='/login'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
