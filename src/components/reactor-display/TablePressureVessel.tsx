import { ReactorInterface } from '../../types/reactors';
import {
  faCircle,
  faRulerHorizontal,
  faCube,
  faRulerVertical,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from '../reactor-data-row';

interface TablePressureVesselProps {
  reactorData: ReactorInterface;
}

function TablePressureVessel({ reactorData }: TablePressureVesselProps) {
  return (
    <div className="container container__table">
      <h3 className="container__title">Pressure Vessel</h3>
      <div className="table-modern">
        <div className="table-section">
          <h4 className="table-section__title">Vessel Specifications</h4>
          <DataRow
            icon={faCircle}
            label="Inner Diameter of Cylindrical Shell"
            value={
              <>
                {reactorData.innerDiameterCylindricalShell}{' '}
                <span className="unit">mm</span>
              </>
            }
          />
          <DataRow
            icon={faRulerHorizontal}
            label="Wall Thickness of Cylindrical Shell"
            value={
              <>
                {reactorData.wallThicknessCylindricalShell}{' '}
                <span className="unit">mm</span>
              </>
            }
          />
          <DataRow
            icon={faCube}
            label="Base Material"
            value={reactorData.baseMaterial}
          />
          <DataRow
            icon={faRulerVertical}
            label="Total Height, Inside"
            value={
              <>
                {reactorData.totHeightInside} <span className="unit">mm</span>
              </>
            }
          />
          <DataRow
            icon={faWeightHanging}
            label="Transport Weight"
            value={
              <>
                {reactorData.transportWeight}{' '}
                <span className="unit">tonne</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TablePressureVessel;
