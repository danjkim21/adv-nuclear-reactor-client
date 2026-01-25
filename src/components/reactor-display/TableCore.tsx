import { ReactorInterface } from '../../types/reactors';
import {
  faRulerVertical,
  faCircle,
  faBolt,
  faFire,
  faAtom,
  faRuler,
  faTableCells,
  faShapes,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from '../reactor-data-row';

interface TableCoreProps {
  reactorData: ReactorInterface;
}

function TableCore({ reactorData }: TableCoreProps) {
  return (
    <div className="container container__table">
      <h3 className="container__title">Reactor Core</h3>
      <div className="table-modern">
        <div className="table-section">
          <h4 className="table-section__title">Core Dimensions</h4>
          <DataRow
            icon={faRulerVertical}
            label="Active Core Height"
            value={
              <>
                {reactorData.coreHeight} <span className="unit">m</span>
              </>
            }
          />
          <DataRow
            icon={faCircle}
            label="Equivalent Core Diameter"
            value={
              <>
                {reactorData.equivCoreDiameter} <span className="unit">m</span>
              </>
            }
          />
          <DataRow
            icon={faRuler}
            label="Outer Diameter of Fuel Rods"
            value={
              <>
                {reactorData.outerCoreDiameterFuelRods}{' '}
                <span className="unit">mm</span>
              </>
            }
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Power Characteristics</h4>
          <DataRow
            icon={faBolt}
            label="Avg Linear Heat Rate"
            value={
              <>
                {reactorData.avgLinearHeatRate}{' '}
                <span className="unit">kW/m</span>
              </>
            }
          />
          <DataRow
            icon={faFire}
            label="Avg Fuel Power Density"
            value={
              <>
                {reactorData.avgFuelPowerDensity}{' '}
                <span className="unit">kW/kgU</span>
              </>
            }
          />
          <DataRow
            icon={faAtom}
            label="Avg Core Power Density"
            value={
              <>
                {reactorData.avgCorePowerDensity}{' '}
                <span className="unit">kW/kgU</span>
              </>
            }
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Fuel Assembly</h4>
          <DataRow
            icon={faTableCells}
            label="Rod Array of Fuel Assembly"
            value={reactorData.rodArray}
          />
          <DataRow
            icon={faShapes}
            label="Lattice Geometry"
            value={reactorData.latticeGeometry}
          />
          <DataRow
            icon={faLayerGroup}
            label="Number of Fuel Assemblies"
            value={reactorData.numOfFuelAssemblies}
          />
        </div>
      </div>
    </div>
  );
}

export default TableCore;
