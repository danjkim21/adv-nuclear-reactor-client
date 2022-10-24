import '../App.css';

function TableCore({ reactorData }) {
  return (
    <>
      <div className="container container__table">
        <h3 className="container__title">Reactor Core</h3>
        <table className="table table__reactor">
          <tbody>
            <tr>
              <td>Active Core Height</td>
              <td>{reactorData[0].coreHeight} m</td>
            </tr>
            <tr>
              <td>Equivalent Core Diameter</td>
              <td>{reactorData[0].equivCoreDiameter} m</td>
            </tr>
            <tr>
              <td>Avg Linear Heat Rate</td>
              <td>{reactorData[0].avgLinearHeatRate} kW/m</td>
            </tr>
            <tr>
              <td>Avg Fuel Power Density</td>
              <td>{reactorData[0].avgFuelPowerDensity} kW/kgU</td>
            </tr>
            <tr>
              <td>Avg Core Power Density</td>
              <td>{reactorData[0].avgCorePowerDensity} kW/kgU</td>
            </tr>
            <tr>
              <td>Outer Diameter of Fuel Rods</td>
              <td>{reactorData[0].outerCoreDiameterFuelRods} mm</td>
            </tr>
            <tr>
              <td>Rod Array of Fuel Assembly</td>
              <td>{reactorData[0].rodArray}</td>
            </tr>
            <tr>
              <td>Lattice Geometry</td>
              <td>{reactorData[0].latticeGeometry}</td>
            </tr>
            <tr>
              <td>Number of Fuel Assemblies</td>
              <td>{reactorData[0].numOfFuelAssemblies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableCore;
