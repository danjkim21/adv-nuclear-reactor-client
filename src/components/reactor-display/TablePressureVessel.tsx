import { ReactorInterface } from '../../types/reactors';

interface TablePressureVesselProps {
  reactorData: ReactorInterface;
}

function TablePressureVessel({ reactorData }: TablePressureVesselProps) {
  return (
    <>
      <div className='container container__table'>
        <h3 className='container__title'>Pressure Vessel</h3>
        <table className='table table__reactor'>
          <tbody>
            <tr>
              <td>Inner Diameter of Cylindrical Shell</td>
              <td>{reactorData.innerDiameterCylindricalShell} mm</td>
            </tr>
            <tr>
              <td>Wall Thickness of Cylindrical Shell</td>
              <td>{reactorData.wallThicknessCylindricalShell} mm</td>
            </tr>
            <tr>
              <td>Base Material</td>
              <td>{reactorData.baseMaterial}</td>
            </tr>
            <tr>
              <td>Total Height, Inside</td>
              <td>{reactorData.totHeightInside} mm</td>
            </tr>
            <tr>
              <td>Transport Weight</td>
              <td>{reactorData.transportWeight} tonne</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablePressureVessel;
