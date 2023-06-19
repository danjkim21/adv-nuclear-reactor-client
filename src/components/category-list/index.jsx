function CategoryList({ categories, setTypeInput }) {
  const categoriesSortedAlpha = categories.sort();

  const filterDataByType = (e) => {
    const selectedType = e.target.innerText;
    setTypeInput(selectedType);
  };

  let category = categoriesSortedAlpha.map((type) => {
    return (
      // <a className='categoryList__link' key={type} href='#'>
      <li className='categoryList__item' key={type} onClick={filterDataByType}>
        {type}
      </li>
      // </a>
    );
  });

  return <ul className='categoryList'>{category}</ul>;
}

export default CategoryList;
