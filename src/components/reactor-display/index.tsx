import OverviewCards from './OverviewCards';
import TableOverview from './TableOverview';
import TableCoolantSys from './TableCoolantSys';
import TableCore from './TableCore';
import TableMaterials from './TableMaterials';
import TablePressureVessel from './TablePressureVessel';
import { ReactorInterface } from '../../types/reactors';
import convertIsoToHumanReadable from '../../utils/convertDateTime';

interface ReactorDisplayProps {
  reactorData: ReactorInterface;
}

function ReactorDisplay({ reactorData }: ReactorDisplayProps) {
  const lastUpdatedString = convertIsoToHumanReadable(reactorData.updatedAt);

  return (
    <section id="displayResultArea" className="section__displayArea">
      <div className="container container__reactorTitle">
        <h2 className="title__reactorName">{reactorData.name} </h2>
        <p className="subtitle__reactorFullName">
          <a
            className="subtitle__link"
            href={`https://aris.iaea.org/PDF/${
              reactorData.nameWebsite.split('\\')[2]
            }`}
            target="_blank"
            rel="noreferrer"
          >
            {reactorData.fullName}
          </a>
        </p>
        <p className="subtitle__reactorUpdatedAt">
          Last Updated: {lastUpdatedString}
        </p>
      </div>
      {/* Top Line Data */}
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
