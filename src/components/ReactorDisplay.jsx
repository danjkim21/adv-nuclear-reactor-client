import '../App.css';
import OverviewCards from './OverviewCards';
import TableOverview from './TableOverview';
import TableCoolantSys from './TableCoolantSys';
import TableCore from './TableCore';
import TableMaterials from './TableMaterials';
import TablePressureVessel from './TablePressureVessel';

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
      {/* Topline Data */}
      <OverviewCards reactorData={reactorData} />

      {/* Table Data Extended */}
      <div className="container container__tables">
        <TableOverview reactorData={reactorData} />
        <TableCoolantSys reactorData={reactorData} />
        <TableCore reactorData={reactorData} />
        <TableMaterials reactorData={reactorData} />
        <TablePressureVessel reactorData={reactorData} />
      </div>
    </section>
  );
}

export default ReactorDisplay;
