import React from 'react';
import ReactorModal from '../components/ReactorModal';
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
      <React.Fragment key={reactor._id}>
        {/* Reactor Card Main */}
        <div className='card--light card__reactorData card__reactorData--all'>
          <a className='link__modal' href={`#${reactor.name}`}>
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
              <FontAwesomeIcon
                className='card__icon'
                icon={faFireFlameSimple}
              />{' '}
              {reactor.thermalOutput} MWth
            </span>
          </div>
          <a
            className='link__modal link__modal--button'
            href={`#${reactor.name}`}
          >
            <FontAwesomeIcon className='' icon={faExternalLinkAlt} />
          </a>
        </div>

        {/* Reactor Modal Pop out */}
        <ReactorModal reactor={reactor} />
      </React.Fragment>
    );
  });

  return (
    <div className='container container__cards container__cards--all'>
      {card}
    </div>
  );
}

export default ReactorCard;
