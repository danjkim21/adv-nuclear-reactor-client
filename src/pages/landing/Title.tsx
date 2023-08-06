import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

interface TitleProps {
  appTitle: string;
}

function Title({ appTitle }: TitleProps) {
  return (
    <div className='container container__appTitle'>
      <h1 className='header__appTitle'>{appTitle}</h1>
      <span className='container container__icon'>
        <FontAwesomeIcon className='app__icon' icon={faBolt} />
      </span>
    </div>
  );
}

export default Title;
