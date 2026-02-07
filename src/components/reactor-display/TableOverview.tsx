import { ReactorInterface } from '../../types/reactors';
import {
  faBuilding,
  faGlobe,
  faCheckCircle,
  faBullseye,
  faAtom,
  faWaveSquare,
  faDroplet,
  faBolt,
  faIndustry,
  faSnowflake,
  faFire,
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
          <DataRow
            icon={faCheckCircle}
            label="Design Status"
            value={reactorData.designStatus}
            badgeClass={getStatusBadgeClass(reactorData.designStatus)}
          />
          <DataRow
            icon={faBullseye}
            label="Purpose"
            value={reactorData.purpose}
          />
          <DataRow
            icon={faIndustry}
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
            icon={faSnowflake}
            label="Moderator"
            value={reactorData.moderator}
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Power Output</h4>
          <DataRow
            icon={faBolt}
            label="Net Output"
            value={
              <>
                {reactorData.outputNet} <span className="unit">MWe</span>
              </>
            }
            highlight={true}
            largeValue={true}
          />
          <DataRow
            icon={faBolt}
            label="Gross Output"
            value={
              <>
                {reactorData.outputGross} <span className="unit">MWe</span>
              </>
            }
            highlight={true}
            largeValue={true}
          />
          <DataRow
            icon={faFire}
            label="Thermal Output"
            value={
              <>
                {reactorData.thermalOutput} <span className="unit">MWth</span>
              </>
            }
            highlight={true}
            largeValue={true}
          />
        </div>
      </div>
    </div>
  );
}

export default TableOverview;
