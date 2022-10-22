import '../App.css';
import OverviewCards from './OverviewCards'
import OverviewTable from './OverviewTable';

function ReactorDisplay({ reactorData }) {
  return (
    <section
      id="displayResultArea"
      className="section__displayArea"
    >
      <div className="container container__reactorTitle">
        <h2 className="title__reactorName">{reactorData[0].name} </h2>
        <p className="subtitle__reactorFullName">
          <a
            className="subtitle__link"
            href={`https://aris.iaea.org/PDF/${
              reactorData[0].nameWebsite.split('\\')[2]
            }`}
            target="_blank"
          >
            {reactorData[0].fullName}
          </a>
        </p>
      </div>
      <OverviewCards reactorData={reactorData} />
      <OverviewTable reactorData={reactorData} />
    </section>
  );
}

export default ReactorDisplay;
