import '../App.css';

function TableMaterials({ reactorData }) {
  return (
    <>
      <div className="container container__table">
        <h3 className="container__title">Core Materials</h3>
        <table className="table table__reactor">
          <tbody>
            <tr>
              <td>Fuel Material</td>
              <td>{reactorData[0].fuelMaterial}</td>
            </tr>
            <tr>
              <td>Cladding Material</td>
              <td>{reactorData[0].claddingMaterial}</td>
            </tr>
            <tr>
              <td>Enrichment of Reload Fuel</td>
              <td>{reactorData[0].reloadFuelEnrichment} wt %</td>
            </tr>
            <tr>
              <td>Fuel Cycle Length</td>
              <td>{reactorData[0].fuelCycleLength} months</td>
            </tr>
            <tr>
              <td>Avg Discharge Burnup</td>
              <td>{reactorData[0].avgDischargeBurnup} MWd/kg</td>
            </tr>
            <tr>
              <td>Burnable Absorber</td>
              <td>{reactorData[0].burnableAbsorber}</td>
            </tr>
            <tr>
              <td>Control Rod Absorber</td>
              <td>{reactorData[0].controlRodAbsorber}</td>
            </tr>
            <tr>
              <td>Soluble Neutron Absorber</td>
              <td>{reactorData[0].solubleNeutronAbsorber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableMaterials;
