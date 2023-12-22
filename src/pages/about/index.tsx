import Footer from '../../components/footer';

function About() {
  return (
    <section className="section__about">
      <div className="container container__desc">
        <h1 className="page__header">Advanced Reactor DataBase API</h1>
        <p className="page__contentDescrip">
          The arDB API is written with Node, Express, and Mongoose, with source
          data scraped using Puppeteer and Cheerio. The client site is built in
          React. We try our best to follow documentation and specs to prevent
          making breaking changes. When you are ready to send API queries, use
          the endpoints listed below.
        </p>
      </div>
      <div className="container container__body">
        <h2>FAQs</h2>
        <h3>Is it Free?</h3>
        <p>Yes</p>
        <h3>Is it open source?</h3>
        <p>
          Of course! Source code for the API is maintained by{' '}
          <a href="https://github.com/danjkim21">Daniel Jay-Young Kim</a> can be
          found in its GitHub repo:{' '}
          <a href="https://github.com/danjkim21/adv-nuclear-reactor-api-v2">
            https://github.com/danjkim21/adv-nuclear-reactor-api-v2
          </a>
          .
        </p>
        <h3>Where is the data from?</h3>
        <p>
          We source and scrape data from multiple places to build an API as
          complete as possible. We use data from:
        </p>
        <ul>
          <li>
            <a href="https://aris.iaea.org/sites/overview.html">
              IAEA ARIS Database
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/List_of_small_modular_reactor_designs">
              Wikipedia: List of SMR Designs
            </a>
          </li>
        </ul>
      </div>
      <div className="container container__body">
        <h2>Endpoints</h2>
        <div className="container">
          <h3>Return Full API Database</h3>
          <pre>https://ardb.cyclic.app/api</pre>
          <h3>Search API by Reactor Name</h3>
          <pre>
            https://ardb.cyclic.app/api/<span>reactor name</span>
          </pre>
          <h3>Return List of all Reactor Types</h3>
          <pre>https://ardb.cyclic.app/api/categories</pre>
          <h3>Search API by Reactor Types</h3>
          <pre>
            https://ardb.cyclic.app/api/categories/<span>reactor type</span>
          </pre>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
