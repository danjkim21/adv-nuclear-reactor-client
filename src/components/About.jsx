import '../App.css';

function About({ data }) {
  const availableReactors = data.map((reactor) => {
    if (reactor.name !== '') {
      return (
        <li
          className="reactors"
          key={Math.random()}
        >
          {reactor.name} {`(${reactor.fullName})`}
        </li>
      );
    }
  });

  return (
    <section className="section__about">
      <div className="container container__desc">
        <h1>Advanced Reactor Database API</h1>
        <p>An API containing web scraped data of advanced nuclear reactor designs.</p>
        <p>
          Maintained by:{' '}
          <a
            href="https://github.com/danjkim21"
            target="_blank"
          >
            Daniel Jay-Young Kim
          </a>
        </p>
        <p>
          See{' '}
          <a
            href="https://github.com/danjkim21/adv-nuclear-reactor-api-v2"
            target="_blank"
          >
            Github Repository
          </a>{' '}
          for full documentation
        </p>
      </div>
      <div className="container container__body">
        <div className="container">
          <h2>Endpoints</h2>
          <h3>Return Full API Database</h3>
          <pre>https://ardb.cyclic.app/api</pre>
          <h3>Search API by Reactor Name</h3>
          <pre>
            https://ardb.cyclic.app/api/<span>reactor name</span>
          </pre>
        </div>

        <div className="container">
          <h2>Available Reactors</h2>
          <ul className='list__reactors'>{availableReactors}</ul>
        </div>
      </div>
    </section>
  );
}

export default About;
