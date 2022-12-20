import '../assets/App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faBolt, faLink } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='section__footer'>
      <Link className='mainApp__link' to='/'>
        <FontAwesomeIcon className='app__icon' icon={faBolt} /> arDB
      </Link>
      <div className='container__socials'>
        <a
          className='socials__link'
          href='https://github.com/danjkim21/adv-nuclear-reactor-api-v2'
        >
          <FontAwesomeIcon className='socials__icon' icon={faGithubSquare} />
        </a>
        <a
          className='socials__link'
          href='https://www.linkedin.com/in/danieljayyoungkim/'
        >
          <FontAwesomeIcon className='socials__icon' icon={faLinkedin} />
        </a>
        <a className='socials__link' href='https://twitter.com/devdanielk'>
          <FontAwesomeIcon className='socials__icon' icon={faTwitterSquare} />
        </a>
        <a className='socials__link' href='https://daniel-jkim.com/'>
          <FontAwesomeIcon className='socials__icon' icon={faLink} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
