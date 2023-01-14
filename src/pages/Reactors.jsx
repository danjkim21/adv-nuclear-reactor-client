import '../assets/App.css';
import ReactorCard from '../components/ReactorCard';
import Footer from '../components/Footer';

function Reactors({ data }) {
  return (
    <section className='section__reactors'>
      <div className='container container__reactors'>
        <h1 className='page__header'>
          Open Source Data for Professionals and Developers
        </h1>
        <p className='page__contentDescrip'>
          You are exploring all available scraped datasets from all categories.
          Available data includes reactor information related to design
          specifications, reactor core, coolant system, core materials, and
          more. If you find new data or would like to provide updates, feel free
          to login and submit a request.
        </p>
      </div>
      <div className='container container__flex'>
        <div className='col col--side'>
          <div className='container__sidebar'>
            <h2 className='sidebar__title'>Categories</h2>
          </div>
        </div>
        <div className='col col--main'>
          <div className='container__scrollMain'>
            <h2>Reactors</h2>
            <ReactorCard data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Reactors;
