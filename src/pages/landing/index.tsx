import Title from './Title';
import Search from './Search';
import Desc from './Desc';
import ReactorDisplay from '../../components/reactor-display';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import useGetAllReactors from '../../hooks/useGetAllReactors';
import useGetReactor from '../../hooks/useGetReactor';

function Landing() {
  // Fetch list of all reactors for search input dropdown
  const { data, isLoading } = useGetAllReactors();

  // Search for reactor via form submit
  const [input, setInput] = useState('');

  const onSearchReactor = (e) => {
    e.preventDefault();
    setInput(e.target.elements.searchReactor.value);
  };
  const { data: reactorData, isActive } = useGetReactor(input);

  return (
    <>
      <main className='section__main'>
        <Title appTitle='arDB' />
        <Desc appDesc='Explore, Research, Support - Advanced reactor resources and data aggregated for policy professionals, reactor developers, tech enthusiasts. An open source project dedicated to cataloging advanced nuclear reactor technologies. ' />
        {/* Form component - searches reactor API for reactor */}
        <Search
          data={data}
          searchReactor={onSearchReactor}
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
