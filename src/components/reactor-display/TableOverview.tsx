import { ReactorInterface } from '../../types/reactors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faGlobe,
  faCheckCircle,
  faBullseye,
  faAtom,
  faWaveSquare,
  faDroplet,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from '../reactor-data-row';

interface TableOverviewProps {
  reactorData: ReactorInterface;
}

function TableOverview({ reactorData }: TableOverviewProps) {
  const getStatusBadgeClass = (status: string) => {
    if (status?.toLowerCase().includes('operation'))
      return 'badge badge--success';
    if (status?.toLowerCase().includes('development'))
      return 'badge badge--info';
    if (status?.toLowerCase().includes('concept'))
      return 'badge badge--warning';
    return 'badge badge--default';
  };

  return (
    <div className="container container__table">
      <h3 className="container__title">Overview</h3>
      <div className="table-modern">
        <div className="table-section">
          <h4 className="table-section__title">Basic Information</h4>
          <DataRow
            icon={faBuilding}
            label="Vendor"
            value={reactorData.designOrg}
            isLink={true}
            href={reactorData.designOrgWebsite}
          />
          <DataRow
            icon={faGlobe}
            label="Country of Origin"
            value={reactorData.country}
          />
          <div className="data-row">
            <div className="data-row__label">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="data-row__icon"
              />
              <span>Design Status</span>
            </div>
            <div className="data-row__value">
              <span className={getStatusBadgeClass(reactorData.designStatus)}>
                {reactorData.designStatus}
              </span>
            </div>
          </div>
          <DataRow
            icon={faBullseye}
            label="Purpose"
            value={reactorData.purpose}
          />
          <DataRow
            icon={faBullseye}
            label="Non-electrical Applications"
            value={reactorData.nonElecApplications || 'n/a'}
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Technical Specifications</h4>
          <DataRow
            icon={faAtom}
            label="Reactor Type"
            value={reactorData.type}
          />
          <DataRow
            icon={faWaveSquare}
            label="Neutron Spectrum"
            value={reactorData.neutronSpectrum}
          />
          <DataRow
            icon={faDroplet}
            label="Coolant"
            value={reactorData.coolant}
          />
          <DataRow
            icon={faDroplet}
            label="Moderator"
            value={reactorData.moderator}
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Power Output</h4>
          <div className="data-row data-row--highlight">
            <div className="data-row__label">
              <FontAwesomeIcon icon={faBolt} className="data-row__icon" />
              <span>Net Output</span>
            </div>
            <div className="data-row__value data-row__value--large">
              {reactorData.outputNet} <span className="unit">MWe</span>
            </div>
          </div>
          <div className="data-row data-row--highlight">
            <div className="data-row__label">
              <FontAwesomeIcon icon={faBolt} className="data-row__icon" />
              <span>Gross Output</span>
            </div>
            <div className="data-row__value data-row__value--large">
              {reactorData.outputGross} <span className="unit">MWe</span>
            </div>
          </div>
          <div className="data-row data-row--highlight">
            <div className="data-row__label">
              <FontAwesomeIcon icon={faBolt} className="data-row__icon" />
              <span>Thermal Output</span>
            </div>
            <div className="data-row__value data-row__value--large">
              {reactorData.thermalOutput} <span className="unit">MWth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableOverview;
