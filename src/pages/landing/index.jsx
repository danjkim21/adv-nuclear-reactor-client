import Title from './Title';
import Search from './Search';
import Desc from './Desc';
import ReactorDisplay from '../../components/reactor-display';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import useGetAllReactors from '../../hooks/useGetAllReactors';

function Landing() {
  let [isActive, setIsActive] = useState(false);
  let [reactorData, setReactorData] = useState([]);

  // Fetch list of all reactors for search input dropdown
  const { data, isLoading } = useGetAllReactors();

  // Search for reactor via form submit
  const searchReactor = async (e) => {
    e.preventDefault();
    const inputtedReactor = e.target.elements.searchReactor.value;

    const fetchReactorData = async () => {
      const response = await fetch(
        `https://ardb.cyclic.app/api/${inputtedReactor}`
      );
      const json = await response.json();
      setReactorData(json);
    };

    if (inputtedReactor !== '') {
      await fetchReactorData().catch(console.error);
      setIsActive(true);
      e.target.elements.searchReactor.value = '';
    }
  };

  return (
    <>
      <main className='section__main'>
        <Title appTitle='arDB' />
        <Desc appDesc='Explore, Research, Support - Advanced reactor resources and data aggregated for policy professionals, reactor developers, tech enthusiasts. An open source project dedicated to cataloging advanced nuclear reactor technologies. ' />
        {/* Form component - searches reactor API for reactor */}
        <Search
          data={data}
          searchReactor={searchReactor}
          isLoading={isLoading}
        />

        <div className='container container__appDivider'>
          <span className='appDivider__text'>or</span>
        </div>

        <div className='container container__appButtons'>
          <Link className='btn_secondary' to='/reactors'>
            Browse All
          </Link>
        </div>

        {/* If reactor as been search in form, display prompt letting user know to scroll to see results */}
        {isActive && (
          <>
            <div className='container__actionIcon'>
              <a className='link__actionIcon' href='#displayResultArea'>
                <span className='button__actionIcon'>
                  <FontAwesomeIcon className='actionIcon' icon={faArrowDown} />
                </span>
              </a>
            </div>
          </>
        )}
      </main>

      {/* Displays reactor data results */}
      {isActive && <ReactorDisplay reactorData={reactorData} />}
    </>
  );
}

export default Landing;