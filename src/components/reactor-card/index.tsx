import React from 'react';
import ReactorModal from '../reactor-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireFlameSimple,
  faAtom,
  faGlobe,
  faLightbulb,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { ReactorInterface } from '../../types/reactors';

interface ReactorCardProps {
  data: ReactorInterface;
  isLoading?: boolean;
}

function ReactorCard({ data }: ReactorCardProps) {
  return (
    <React.Fragment key={data._id}>
      {/* Reactor Card Main */}
      <div className="card--light card__reactorData card__reactorData--all">
        <a className="link__modal" href={`#${data.name}`}>
          <h3 className="card__title">{data.name}</h3>
        </a>
        <p className="card__subtitle">{data.fullName}</p>
        <div className="card__reactorProperties">
          <span className="card__reactorProp">
            <FontAwesomeIcon className="card__icon" icon={faGlobe} />{' '}
            {data.designOrg}
          </span>
          <span className="card__reactorProp">
            <FontAwesomeIcon className="card__icon" icon={faAtom} /> {data.type}{' '}
            ({data.coolant})
          </span>
          <span className="card__reactorProp">
            <FontAwesomeIcon className="card__icon" icon={faLightbulb} />{' '}
            {data.outputGross} MWe (gross)
          </span>
          <span className="card__reactorProp">
            <FontAwesomeIcon className="card__icon" icon={faFireFlameSimple} />{' '}
            {data.thermalOutput} MWth
          </span>
        </div>
        <a className="link__modal link__modal--button" href={`#${data.name}`}>
          <FontAwesomeIcon className="" icon={faExternalLinkAlt} />
        </a>
      </div>

      {/* Reactor Modal Pop out */}
      <ReactorModal reactor={data} />
    </React.Fragment>
  );
}

export default ReactorCard;
