import '../assets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireFlameSimple,
  faAtom,
  faGlobe,
  faLightbulb,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

function ReactorCard({ data }) {
  let card = data.map((reactor) => {
    return (
      // Reactor Card
      <div
        className='card--light card__reactorData card__reactorData--all'
        key={reactor.name}
      >
        <a className='link__modal' href='#'>
          <h3 className='card__title'>{reactor.name}</h3>
        </a>
        <p className='card__subtitle'>{reactor.fullName}</p>
        <div className='card__reactorProperties'>
          <span className='card__reactorProp'>
            <FontAwesomeIcon className='card__icon' icon={faGlobe} />{' '}
            {reactor.designOrg}
          </span>
          <span className='card__reactorProp'>
            <FontAwesomeIcon className='card__icon' icon={faAtom} />{' '}
            {reactor.type} ({reactor.coolant})
          </span>
          <span className='card__reactorProp'>
            <FontAwesomeIcon className='card__icon' icon={faLightbulb} />{' '}
            {reactor.outputGross} MWe (gross)
          </span>
          <span className='card__reactorProp'>
            <FontAwesomeIcon className='card__icon' icon={faFireFlameSimple} />{' '}
            {reactor.thermalOutput} MWth
          </span>
        </div>
        <a className='link__modal link__modal--button' href='#'>
          <FontAwesomeIcon className='' icon={faExternalLinkAlt} />
        </a>
      </div>

      // TODO: Modal
    );
  });

  return (
    <div className='container container__cards container__cards--all'>
      {card}
    </div>
  );
}

export default ReactorCard;
