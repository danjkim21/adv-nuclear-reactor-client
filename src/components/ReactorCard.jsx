import '../assets/App.css';

function ReactorCard({ data }) {
  let card = data.map((reactor) => {
    return (
      <div
        className='card--light card__reactorData card__reactorData--all'
        key={reactor.name}
      >
        <h3 className='card__title'>{reactor.name}</h3>
      </div>
    );
  });

  return (
    <div className='container container__cards container__cards--all'>
      {card}
    </div>
  );
}

export default ReactorCard;
