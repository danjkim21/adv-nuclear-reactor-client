import { ReactorInterface } from '../../types/reactors';

interface ReactorModalProps {
  reactor: ReactorInterface;
}

function ReactorModal({ reactor }: ReactorModalProps) {
  return (
    <div id={reactor.name} className="modal__window">
      <div className="modal__inner">
        <a href="#" title="Close" className="modal__close">
          Close
        </a>
        <h3 className="card__title">{reactor.name}</h3>
        <p className="card__subtitle">{reactor.fullName}</p>

        <table className="table tableModal">
          <thead className="tableModal__title">
            <tr>
              <th>Overview</th>
            </tr>
          </thead>
          <tbody className="tableModal__data">
            <tr className="tableModal__row">
              <td>Vendor</td>
              <td>
                <a href={reactor.designOrgWebsite}>{reactor.designOrg}</a>
              </td>
            </tr>
            <tr className="tableModal__row">
              <td>Country of Origin</td>
              <td>{reactor.country}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Design Status</td>
              <td>{reactor.designStatus}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Purpose</td>
              <td>{reactor.purpose}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Non-electrical Applications</td>
              <td>{reactor.nonElecApplications}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Reactor Type</td>
              <td>{reactor.type}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Neutron Spectrum</td>
              <td>{reactor.neutronSpectrum}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Coolant</td>
              <td>{reactor.coolant}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Moderator</td>
              <td>{reactor.moderator}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Power Plant Net Output</td>
              <td>{`${reactor.outputNet} MWe`}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Power Plant Gross Output</td>
              <td>{`${reactor.outputGross} MWe`}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Reactor Thermal Output</td>
              <td>{`${reactor.thermalOutput} MWth`}</td>
            </tr>
          </tbody>
        </table>

        <table className="table tableModal">
          <thead className="tableModal__title">
            <tr>
              <th>Coolant System</th>
            </tr>
          </thead>
          <tbody className="tableModal__data">
            <tr className="tableModal__row">
              <td>Coolant</td>
              <td>{reactor.coolant}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Primary Flow Rate</td>
              <td>{reactor.primaryCoolantFlowRate} kg/s</td>
            </tr>
            <tr className="tableModal__row">
              <td>Operating Pressure</td>
              <td>{reactor.operatingPressure} MPa</td>
            </tr>
            <tr className="tableModal__row">
              <td>Inlet Temperature</td>
              <td>{reactor.coolantInletTemp} &#8451;</td>
            </tr>
            <tr className="tableModal__row">
              <td>Outlet Temperature</td>
              <td>{reactor.coolantOutletTemp} &#8451;</td>
            </tr>
            <tr className="tableModal__row">
              <td>Delta Temperature</td>
              <td>{reactor.deltaTemp} &#8451;</td>
            </tr>
          </tbody>
        </table>

        <table className="table tableModal">
          <thead className="tableModal__title">
            <tr>
              <th>Reactor Core</th>
            </tr>
          </thead>
          <tbody className="tableModal__data">
            <tr className="tableModal__row">
              <td>Active Core Height</td>
              <td>{reactor.coreHeight} m</td>
            </tr>
            <tr className="tableModal__row">
              <td>Equivalent Core Diameter</td>
              <td>{reactor.equivCoreDiameter} m</td>
            </tr>
            <tr className="tableModal__row">
              <td>Avg Linear Heat Rate</td>
              <td>{reactor.avgLinearHeatRate} kW/m</td>
            </tr>
            <tr className="tableModal__row">
              <td>Avg Fuel Power Density</td>
              <td>{reactor.avgFuelPowerDensity} kW/kgU</td>
            </tr>
            <tr className="tableModal__row">
              <td>Avg Core Power Density</td>
              <td>{reactor.avgCorePowerDensity} kW/kgU</td>
            </tr>
            <tr className="tableModal__row">
              <td>Outer Diameter of Fuel Rods</td>
              <td>{reactor.outerCoreDiameterFuelRods} mm</td>
            </tr>
            <tr className="tableModal__row">
              <td>Rod Array of Fuel Assembly</td>
              <td>{reactor.rodArray}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Lattice Geometry</td>
              <td>{reactor.latticeGeometry}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Number of Fuel Assemblies</td>
              <td>{reactor.numOfFuelAssemblies}</td>
            </tr>
          </tbody>
        </table>

        <table className="table tableModal">
          <thead className="tableModal__title">
            <tr>
              <th>Core Materials</th>
            </tr>
          </thead>
          <tbody className="tableModal__data">
            <tr className="tableModal__row">
              <td>Fuel Material</td>
              <td>{reactor.fuelMaterial}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Cladding Material</td>
              <td>{reactor.claddingMaterial}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Enrichment of Reload Fuel</td>
              <td>{reactor.reloadFuelEnrichment} wt %</td>
            </tr>
            <tr className="tableModal__row">
              <td>Fuel Cycle Length</td>
              <td>{reactor.fuelCycleLength} months</td>
            </tr>
            <tr className="tableModal__row">
              <td>Avg Discharge Burnup</td>
              <td>{reactor.avgDischargeBurnup} MWd/kg</td>
            </tr>
            <tr className="tableModal__row">
              <td>Burnable Absorber</td>
              <td>{reactor.burnableAbsorber}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Control Rod Absorber</td>
              <td>{reactor.controlRodAbsorber}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Soluble Neutron Absorber</td>
              <td>{reactor.solubleNeutronAbsorber}</td>
            </tr>
          </tbody>
        </table>

        <table className="table tableModal">
          <thead className="tableModal__title">
            <tr>
              <th>Pressure Vessel</th>
            </tr>
          </thead>
          <tbody className="tableModal__data">
            <tr className="tableModal__row">
              <td>Inner Diameter of Cylindrical Shell</td>
              <td>{reactor.innerDiameterCylindricalShell} mm</td>
            </tr>
            <tr className="tableModal__row">
              <td>Wall Thickness of Cylindrical Shell</td>
              <td>{reactor.wallThicknessCylindricalShell} mm</td>
            </tr>
            <tr className="tableModal__row">
              <td>Base Material</td>
              <td>{reactor.baseMaterial}</td>
            </tr>
            <tr className="tableModal__row">
              <td>Total Height, Inside</td>
              <td>{reactor.totHeightInside} mm</td>
            </tr>
            <tr className="tableModal__row">
              <td>Transport Weight</td>
              <td>{reactor.transportWeight} tonne</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReactorModal;
