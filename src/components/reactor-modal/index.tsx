import { ReactorInterface } from '../../types/reactors';
import convertIsoToHumanReadable from '../../utils/convertDateTime';
import getPdfUrl from '../../utils/getPdfUrl';
import TableOverview from '../reactor-display/TableOverview';
import TableCoolantSys from '../reactor-display/TableCoolantSys';
import TableCore from '../reactor-display/TableCore';
import TableMaterials from '../reactor-display/TableMaterials';
import TablePressureVessel from '../reactor-display/TablePressureVessel';

interface ReactorModalProps {
  reactor: ReactorInterface;
}

function ReactorModal({ reactor }: ReactorModalProps) {
  const lastUpdatedString = convertIsoToHumanReadable(reactor.updatedAt);

  return (
    <div id={reactor.name} className="modal__window">
      <div className="modal__inner">
        <a href="#" className="modal__close" aria-label="Close modal">
          Close
        </a>
        <h3 className="card__title">{reactor.name}</h3>
        <p className="card__subtitle">
          <a
            href={getPdfUrl(reactor.nameWebsite)}
            target="_blank"
            rel="noreferrer"
          >
            {reactor.fullName}
          </a>
        </p>
        <p className="card__subtitle">Last Updated: {lastUpdatedString}</p>

        <div className="modal__tables">
          <TableOverview reactorData={reactor} />
          <TableCoolantSys reactorData={reactor} />
          <TableCore reactorData={reactor} />
          <TableMaterials reactorData={reactor} />
          <TablePressureVessel reactorData={reactor} />
        </div>
      </div>
    </div>
  );
}

export default ReactorModal;
