import '../App.css';

function TablePressureVessel({ reactorData }) {
  return (
    <>
      <div className="container container__table">
        <h3 className="container__title">Pressure Vessel</h3>
        <table className="table table__reactor">
          <tbody>
            <tr>
              <td>Inner Diameter of Cylindrical Shell</td>
              <td>{reactorData[0].innerDiameterCylindricalShell} mm</td>
            </tr>
            <tr>
              <td>Wall Thickness of Cylindrical Shell</td>
              <td>{reactorData[0].wallThicknessCylindricalShell} mm</td>
            </tr>
            <tr>
              <td>Base Material</td>
              <td>{reactorData[0].baseMaterial}</td>
            </tr>
            <tr>
              <td>Total Height, Inside</td>
              <td>{reactorData[0].totHeightInside} mm</td>
            </tr>
            <tr>
              <td>Transport Weight</td>
              <td>{reactorData[0].transportWeight} tonne</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablePressureVessel;
