import '../App.css';

function OverviewTable({ reactorData }) {
  return (
    <>
      <div className="container container__overview">
        <h3 className="container__title">Overview</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Vendor</td>
              <td>
                <a href={reactorData[0].designOrgWebsite}>{reactorData[0].designOrg}</a>
              </td>
            </tr>
            <tr>
              <td>Country of Origin</td>
              <td>{reactorData[0].country}</td>
            </tr>
            <tr>
              <td>Design Status</td>
              <td>{reactorData[0].designStatus}</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>{reactorData[0].purpose}</td>
            </tr>
            <tr>
              <td>Non-electrical Applications</td>
              <td>{reactorData[0].nonElecApplications}</td>
            </tr>
            <tr>
              <td>Reactor Type</td>
              <td>{reactorData[0].type}</td>
            </tr>
            <tr>
              <td>Neutron Spectrum</td>
              <td>{reactorData[0].neutronSpectrum}</td>
            </tr>
            <tr>
              <td>Coolant</td>
              <td>{reactorData[0].coolant}</td>
            </tr>
            <tr>
              <td>Moderator</td>
              <td>{reactorData[0].moderator}</td>
            </tr>
            <tr>
              <td>Power Plant Net Output</td>
              <td>{`${reactorData[0].outputNet} MWe`}</td>
            </tr>
            <tr>
              <td>Power Plant Gross Output</td>
              <td>{`${reactorData[0].outputGross} MWe`}</td>
            </tr>
            <tr>
              <td>Reactor Thermal Output</td>
              <td>{`${reactorData[0].thermalOutput} MWth`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OverviewTable;
