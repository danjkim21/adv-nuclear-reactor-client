import '../App.css';

function TableMaterials({ reactorData }) {
  return (
    <>
      <div className='container container__table'>
        <h3 className='container__title'>Core Materials</h3>
        <table className='table table__reactor'>
          <tbody>
            <tr>
              <td>Fuel Material</td>
              <td>{reactorData.fuelMaterial}</td>
            </tr>
            <tr>
              <td>Cladding Material</td>
              <td>{reactorData.claddingMaterial}</td>
            </tr>
            <tr>
              <td>Enrichment of Reload Fuel</td>
              <td>{reactorData.reloadFuelEnrichment} wt %</td>
            </tr>
            <tr>
              <td>Fuel Cycle Length</td>
              <td>{reactorData.fuelCycleLength} months</td>
            </tr>
            <tr>
              <td>Avg Discharge Burnup</td>
              <td>{reactorData.avgDischargeBurnup} MWd/kg</td>
            </tr>
            <tr>
              <td>Burnable Absorber</td>
              <td>{reactorData.burnableAbsorber}</td>
            </tr>
            <tr>
              <td>Control Rod Absorber</td>
              <td>{reactorData.controlRodAbsorber}</td>
            </tr>
            <tr>
              <td>Soluble Neutron Absorber</td>
              <td>{reactorData.solubleNeutronAbsorber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableMaterials;
