import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface CategoryListProps {
  categories: string[] | undefined;
  setTypeInput: (type: string) => void;
  selectedType: string;
  isLoading: boolean;
}

function CategoryList({
  categories,
  setTypeInput,
  selectedType,
  isLoading,
}: CategoryListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (categories === undefined || isLoading) {
    return (
      <>
        <Skeleton height={55} />
        <Skeleton height={55} />
        <Skeleton height={55} />
      </>
    );
  }

  const filterDataByType = (e) => {
    const selectedType = e.target.innerText;
    setTypeInput(selectedType);
    setIsOpen(false);
  };

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  const categoryListItem = categories.map((type) => {
    const isActive = type === selectedType;
    return (
      <li
        className={`categoryList__item ${
          isActive ? 'categoryList__item--active' : ''
        }`}
        key={type}
        onClick={filterDataByType}
      >
        <a href="#content">{type}</a>
      </li>
    );
  });

  const getButtonLabel = () => {
    if (selectedType === 'ALL') {
      return 'All Reactor Types';
    }
    return selectedType;
  };

  return (
    <div className="categoryList__wrapper" ref={dropdownRef}>
      <button
        className="categoryList__toggle"
        onClick={toggleCategories}
        aria-expanded={isOpen}
        aria-label="Toggle categories menu"
      >
        <span>{getButtonLabel()}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isOpen && (
        <ul className="categoryList categoryList--open">{categoryListItem}</ul>
      )}
    </div>
  );
}

export default CategoryList;
