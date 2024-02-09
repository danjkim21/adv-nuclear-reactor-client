import { Skeleton } from '@mui/material';

interface CategoryListProps {
  categories: string[] | undefined;
  setTypeInput: (type: string) => void;
  isLoading?: boolean;
}

function CategoryList({
  categories,
  setTypeInput,
  isLoading,
}: CategoryListProps) {
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
  };

  const categoryListItem = categories.map((type) => {
    return (
      <li className="categoryList__item" key={type} onClick={filterDataByType}>
        {type}
      </li>
    );
  });

  return <ul className="categoryList">{categoryListItem}</ul>;
}

export default CategoryList;
