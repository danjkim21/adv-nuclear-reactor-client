interface CategoryListProps {
  categories: string[];
  setTypeInput: (type: string) => void;
  isLoading?: boolean;
}

function CategoryList({ categories, setTypeInput }: CategoryListProps) {
  const categoriesSortedAlpha = categories.sort();

  const filterDataByType = (e) => {
    const selectedType = e.target.innerText;
    setTypeInput(selectedType);
  };

  const category = categoriesSortedAlpha.map((type) => {
    return (
      <li className="categoryList__item" key={type} onClick={filterDataByType}>
        {type}
      </li>
    );
  });

  return <ul className="categoryList">{category}</ul>;
}

export default CategoryList;
