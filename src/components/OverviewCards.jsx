import '../assets/App.css';

function OverviewCards({ reactorData }) {
  return (
    <div className='container container__cards'>
      <div className='card--dark card__reactorData'>
        <h3 className='card__title'>Vendor</h3>
        <div className='subcontainer__cardDetail'>
          <i className='fa-solid fa-globe reactorData__icon'></i>
          <div>
            <p className='reactorData__detail'>{reactorData.designOrg}</p>
            <p className='reactorData__detail'>{reactorData.country}</p>
          </div>
        </div>
      </div>

      <div className='card--dark card__reactorData'>
        <h3 className='card__title'>Reactor Type</h3>
        <div className='subcontainer__cardDetail'>
          <i className='fa-solid fa-atom reactorData__icon'></i>
          <div>
            <p className='reactorData__detail'>{reactorData.type}</p>
          </div>
        </div>
      </div>

      <div className='card--dark card__reactorData'>
        <h3 className='card__title'>Elec. Output, MWe</h3>
        <div className='subcontainer__cardDetail'>
          <i className='fa-regular fa-lightbulb reactorData__icon'></i>
          <div>
            <p className='reactorData__detail'>
              {reactorData.outputGross} (gross)
            </p>
            <p className='reactorData__detail'>{reactorData.outputNet} (net)</p>
          </div>
        </div>
      </div>

      <div className='card--dark card__reactorData'>
        <h3 className='card__title'>Thermal Output, MWth</h3>
        <div className='subcontainer__cardDetail'>
          <i className='fa-solid fa-fire-flame-simple reactorData__icon'></i>
          <div>
            <p className='reactorData__detail'>{reactorData.thermalOutput}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCards;
