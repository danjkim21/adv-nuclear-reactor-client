import '../assets/App.css';
import CategoryList from '../components/CategoryList';
import ReactorCard from '../components/ReactorCard';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Reactors({ data, isLoading }) {
  return (
    <section className='section__reactors'>
      <div className='container container__reactors'>
        <div className='container container__header'>
          <h1 className='page__header'>
            Open Source Data for Professionals and Developers
          </h1>
          <p className='page__contentDescrip'>
            You are exploring all available scraped datasets from all
            categories. Available data includes reactor information related to
            design specifications, reactor core, coolant system, core materials,
            and more. If you find new data or would like to provide updates,
            feel free to login and submit a request.
          </p>
        </div>
      </div>
      <div className='container container__flex'>
        {/* sidebar containing filtering for reactors */}
        <div className='col col--side'>
          <div className='container__sidebar'>
            <h2 className='sidebar__title'>Categories</h2>
            {isLoading && <FontAwesomeIcon icon={faSpinner} spinPulse />}
            {!isLoading && <CategoryList data={data} isLoading={isLoading} />}
          </div>
        </div>
        {/* Displays all reactors in cards */}
        <div className='col col--main'>
          <div className='container__scrollMain'>
            <h2>Reactors</h2>
            {isLoading && <FontAwesomeIcon icon={faSpinner} spinPulse />}
            {!isLoading && <ReactorCard data={data} isLoading={isLoading} />}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Reactors;
