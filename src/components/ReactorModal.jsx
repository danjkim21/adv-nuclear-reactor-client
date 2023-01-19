import '../assets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireFlameSimple,
  faAtom,
  faGlobe,
  faLightbulb,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

function ReactorModal({ reactor }) {
  return (
    <div id={reactor.name} className='modal-window'>
      <div>
        <a href='#' title='Close' className='modal-close'>
          Close
        </a>
        <h3 className='card__title'>{reactor.name}</h3>
        <p className='card__subtitle'>{reactor.fullName}</p>
      </div>
    </div>
  );
}

export default ReactorModal;
