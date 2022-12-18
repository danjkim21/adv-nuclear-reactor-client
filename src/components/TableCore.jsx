import '../assets/App.css';

function TableCore({ reactorData }) {
  return (
    <>
      <div className='container container__table'>
        <h3 className='container__title'>Reactor Core</h3>
        <table className='table table__reactor'>
          <tbody>
            <tr>
              <td>Active Core Height</td>
              <td>{reactorData.coreHeight} m</td>
            </tr>
            <tr>
              <td>Equivalent Core Diameter</td>
              <td>{reactorData.equivCoreDiameter} m</td>
            </tr>
            <tr>
              <td>Avg Linear Heat Rate</td>
              <td>{reactorData.avgLinearHeatRate} kW/m</td>
            </tr>
            <tr>
              <td>Avg Fuel Power Density</td>
              <td>{reactorData.avgFuelPowerDensity} kW/kgU</td>
            </tr>
            <tr>
              <td>Avg Core Power Density</td>
              <td>{reactorData.avgCorePowerDensity} kW/kgU</td>
            </tr>
            <tr>
              <td>Outer Diameter of Fuel Rods</td>
              <td>{reactorData.outerCoreDiameterFuelRods} mm</td>
            </tr>
            <tr>
              <td>Rod Array of Fuel Assembly</td>
              <td>{reactorData.rodArray}</td>
            </tr>
            <tr>
              <td>Lattice Geometry</td>
              <td>{reactorData.latticeGeometry}</td>
            </tr>
            <tr>
              <td>Number of Fuel Assemblies</td>
              <td>{reactorData.numOfFuelAssemblies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableCore;
