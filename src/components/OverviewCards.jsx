import '../App.css';

function OverviewCards({ reactorData }) {
  return (
    <div className="container container__cards">
      <div className="card__reactorData">
        <h3 className="card__title">Vendor</h3>
        <div className="subcontainer__cardDetail">
          <i className="fa-solid fa-globe reactorData__icon"></i>
          <div>
            <p className="reactorData__detail">{reactorData[0].designOrg}</p>
            <p className="reactorData__detail">{reactorData[0].country}</p>
          </div>
        </div>
      </div>

      <div className="card__reactorData">
        <h3 className="card__title">Reactor Type</h3>
        <div className="subcontainer__cardDetail">
          <i className="fa-solid fa-atom reactorData__icon"></i>
          <div>
            <p className="reactorData__detail">{reactorData[0].type}</p>
          </div>
        </div>
      </div>

      <div className="card__reactorData">
        <h3 className="card__title">Elec. Output, MWe</h3>
        <div className="subcontainer__cardDetail">
          <i className="fa-regular fa-lightbulb reactorData__icon"></i>
          <div>
            <p className="reactorData__detail">
              {reactorData[0].outputGross} (gross)
            </p>
            <p className="reactorData__detail">{reactorData[0].outputNet} (net)</p>
          </div>
        </div>
      </div>

      <div className="card__reactorData">
        <h3 className="card__title">Thermal Output, MWth</h3>
        <div className="subcontainer__cardDetail">
          <i className="fa-solid fa-fire-flame-simple reactorData__icon"></i>
          <div>
            <p className="reactorData__detail">{reactorData[0].thermalOutput}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCards;
