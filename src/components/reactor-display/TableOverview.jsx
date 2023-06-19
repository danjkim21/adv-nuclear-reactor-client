function TableOverview({ reactorData }) {
  return (
    <>
      <div className='container container__table'>
        <h3 className='container__title'>Overview</h3>
        <table className='table table__reactor'>
          <tbody>
            <tr>
              <td>Vendor</td>
              <td>
                <a href={reactorData.designOrgWebsite}>
                  {reactorData.designOrg}
                </a>
              </td>
            </tr>
            <tr>
              <td>Country of Origin</td>
              <td>{reactorData.country}</td>
            </tr>
            <tr>
              <td>Design Status</td>
              <td>{reactorData.designStatus}</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>{reactorData.purpose}</td>
            </tr>
            <tr>
              <td>Non-electrical Applications</td>
              <td>{reactorData.nonElecApplications}</td>
            </tr>
            <tr>
              <td>Reactor Type</td>
              <td>{reactorData.type}</td>
            </tr>
            <tr>
              <td>Neutron Spectrum</td>
              <td>{reactorData.neutronSpectrum}</td>
            </tr>
            <tr>
              <td>Coolant</td>
              <td>{reactorData.coolant}</td>
            </tr>
            <tr>
              <td>Moderator</td>
              <td>{reactorData.moderator}</td>
            </tr>
            <tr>
              <td>Power Plant Net Output</td>
              <td>{`${reactorData.outputNet} MWe`}</td>
            </tr>
            <tr>
              <td>Power Plant Gross Output</td>
              <td>{`${reactorData.outputGross} MWe`}</td>
            </tr>
            <tr>
              <td>Reactor Thermal Output</td>
              <td>{`${reactorData.thermalOutput} MWth`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableOverview;
