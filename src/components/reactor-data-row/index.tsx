import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface DataRowProps {
  icon: IconDefinition;
  label: string;
  value: React.ReactNode;
  isLink?: boolean;
  href?: string;
}

function DataRow({
  icon,
  label,
  value,
  isLink = false,
  href = '',
}: DataRowProps) {
  return (
    <div className="data-row">
      <div className="data-row__label">
        <FontAwesomeIcon icon={icon} className="data-row__icon" />
        <span>{label}</span>
      </div>
      <div className="data-row__value">
        {isLink && href ? (
          <a
            href={href}
            className="data-row__link"
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}

export default DataRow;
