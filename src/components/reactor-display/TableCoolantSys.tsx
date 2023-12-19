import { ReactorInterface } from "../../types/reactors";

interface TableCoolantSysProps {
  reactorData: ReactorInterface;
}

function TableCoolantSys({ reactorData }: TableCoolantSysProps) {
  return (
    <>
      <div className="container container__table">
        <h3 className="container__title">Coolant System</h3>
        <table className="table table__reactor">
          <tbody>
            <tr>
              <td>Coolant</td>
              <td>{reactorData.coolant}</td>
            </tr>
            <tr>
              <td>Primary Flow Rate</td>
              <td>{reactorData.primaryCoolantFlowRate} kg/s</td>
            </tr>
            <tr>
              <td>Operating Pressure</td>
              <td>{reactorData.operatingPressure} MPa</td>
            </tr>
            <tr>
              <td>Inlet Temperature</td>
              <td>{reactorData.coolantInletTemp} &#8451;</td>
            </tr>
            <tr>
              <td>Outlet Temperature</td>
              <td>{reactorData.coolantOutletTemp} &#8451;</td>
            </tr>
            <tr>
              <td>Delta Temperature</td>
              <td>{reactorData.deltaTemp} &#8451;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableCoolantSys;
