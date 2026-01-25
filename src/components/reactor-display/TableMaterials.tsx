import { ReactorInterface } from '../../types/reactors';
import {
  faAtom,
  faShieldHalved,
  faPercent,
  faClock,
  faFire,
  faBan,
  faSliders,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';
import DataRow from '../reactor-data-row';

interface TableMaterialsProps {
  reactorData: ReactorInterface;
}

function TableMaterials({ reactorData }: TableMaterialsProps) {
  return (
    <div className="container container__table">
      <h3 className="container__title">Core Materials</h3>
      <div className="table-modern">
        <div className="table-section">
          <h4 className="table-section__title">Fuel Materials</h4>
          <DataRow
            icon={faAtom}
            label="Fuel Material"
            value={reactorData.fuelMaterial}
          />
          <DataRow
            icon={faShieldHalved}
            label="Cladding Material"
            value={reactorData.claddingMaterial}
          />
          <DataRow
            icon={faPercent}
            label="Enrichment of Reload Fuel"
            value={
              <>
                {reactorData.reloadFuelEnrichment}{' '}
                <span className="unit">wt %</span>
              </>
            }
          />
          <DataRow
            icon={faClock}
            label="Fuel Cycle Length"
            value={
              <>
                {reactorData.fuelCycleLength}{' '}
                <span className="unit">months</span>
              </>
            }
          />
          <DataRow
            icon={faFire}
            label="Avg Discharge Burnup"
            value={
              <>
                {reactorData.avgDischargeBurnup}{' '}
                <span className="unit">MWd/kg</span>
              </>
            }
          />
        </div>

        <div className="table-section">
          <h4 className="table-section__title">Neutron Control</h4>
          <DataRow
            icon={faBan}
            label="Burnable Absorber"
            value={reactorData.burnableAbsorber}
          />
          <DataRow
            icon={faSliders}
            label="Control Rod Absorber"
            value={reactorData.controlRodAbsorber}
          />
          <DataRow
            icon={faFlask}
            label="Soluble Neutron Absorber"
            value={reactorData.solubleNeutronAbsorber}
          />
        </div>
      </div>
    </div>
  );
}

export default TableMaterials;
