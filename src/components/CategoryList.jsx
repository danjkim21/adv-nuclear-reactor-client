import '../assets/App.css';

function CategoryList({ data }) {
  const categories = [...new Set([...data].map((reactor) => reactor.type))];

  let category = categories.map((type) => {
    return (
      <li className='categoryList__item' key={type}>
        {type}
      </li>
    );
  });

  return (
    <ul className='categoryList'>
      <a className='categoryList__link' href='#'>
        {category}
      </a>
    </ul>
  );
}

export default CategoryList;
