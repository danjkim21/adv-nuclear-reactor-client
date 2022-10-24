import '../App.css';

function TableCoolantSys({ reactorData }) {
  return (
    <>
      <div className="container container__table">
        <h3 className="container__title">Coolant System</h3>
        <table className="table table__reactor">
          <tbody>
            <tr>
              <td>Coolant</td>
              <td>{reactorData[0].coolant}</td>
            </tr>
            <tr>
              <td>Primary Flow Rate</td>
              <td>{reactorData[0].primaryCoolantFlowRate} kg/s</td>
            </tr>
            <tr>
              <td>Operating Pressure</td>
              <td>{reactorData[0].operatingPressure} MPa</td>
            </tr>
            <tr>
              <td>Inlet Temperature</td>
              <td>{reactorData[0].coolantInletTemp} &#8451;</td>
            </tr>
            <tr>
              <td>Outlet Temperature</td>
              <td>{reactorData[0].coolantOutletTemp} &#8451;</td>
            </tr>
            <tr>
              <td>Delta Temperature</td>
              <td>{reactorData[0].deltaTemp} &#8451;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableCoolantSys;
