import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface DataRowProps {
  icon: IconDefinition;
  label: string;
  value: React.ReactNode;
  isLink?: boolean;
  href?: string;
  badgeClass?: string;
  highlight?: boolean;
  largeValue?: boolean;
}

function DataRow({
  icon,
  label,
  value,
  isLink = false,
  href = '',
  badgeClass,
  highlight = false,
  largeValue = false,
}: DataRowProps) {
  const rowClass = highlight ? 'data-row data-row--highlight' : 'data-row';
  const valueClass = largeValue
    ? 'data-row__value data-row__value--large'
    : 'data-row__value';

  const renderValue = () => {
    if (badgeClass) {
      return <span className={badgeClass}>{value}</span>;
    }
    if (isLink && href) {
      return (
        <a
          href={href}
          className="data-row__link"
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      );
    }
    return value;
  };

  return (
    <div className={rowClass}>
      <div className="data-row__label">
        <FontAwesomeIcon icon={icon} className="data-row__icon" />
        <span>{label}</span>
      </div>
      <div className={valueClass}>{renderValue()}</div>
    </div>
  );
}

export default DataRow;
