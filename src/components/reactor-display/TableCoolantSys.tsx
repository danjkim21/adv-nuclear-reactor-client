import { ReactorInterface } from '../../types/reactors';
import {
  faDroplet,
  faArrowsUpDown,
  faGaugeHigh,
  faTemperatureHigh,
  faTemperatureLow,
  faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from '../reactor-data-row';

interface TableCoolantSysProps {
  reactorData: ReactorInterface;
}

function TableCoolantSys({ reactorData }: TableCoolantSysProps) {
  return (
    <div className="container container__table">
      <h3 className="container__title">Coolant System</h3>
      <div className="table-modern">
        <div className="table-section">
          <h4 className="table-section__title">System Configuration</h4>
          <DataRow
            icon={faDroplet}
            label="Coolant"
            value={reactorData.coolant}
          />
          <DataRow
            icon={faArrowsUpDown}
            label="Primary Flow Rate"
            value={
              <>
                {reactorData.primaryCoolantFlowRate}{' '}
                <span className="unit">kg/s</span>
              </>
            }
          />
          <DataRow
            icon={faGaugeHigh}
            label="Operating Pressure"
            value={
              <>
                {reactorData.operatingPressure}{' '}
                <span className="unit">MPa</span>
              </>
            }
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Temperature Parameters</h4>
          <DataRow
            icon={faTemperatureLow}
            label="Inlet Temperature"
            value={
              <>
                {reactorData.coolantInletTemp} <span className="unit">°C</span>
              </>
            }
          />
          <DataRow
            icon={faTemperatureHigh}
            label="Outlet Temperature"
            value={
              <>
                {reactorData.coolantOutletTemp} <span className="unit">°C</span>
              </>
            }
          />
          <DataRow
            icon={faArrowRightArrowLeft}
            label="Delta Temperature"
            value={
              <>
                {reactorData.deltaTemp} <span className="unit">°C</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TableCoolantSys;
