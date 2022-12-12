import '../App.css';
import Title from './Title';
import Search from './Search';
import Desc from './Desc';
import ReactorDisplay from './ReactorDisplay';
import { useState } from 'react';

function Landing({ data }) {
  let [isActive, setIsActive] = useState(false);
  let [reactorData, setReactorData] = useState([]);

  // Search for reactor via form submit
  const searchReactor = async (e) => {
    e.preventDefault();
    const inputedReactor = e.target.elements.searchReactor.value;

    const fetchReactorData = async () => {
      const response = await fetch(
        `https://ardb.cyclic.app/api/${inputedReactor}`
      );
      const json = await response.json();
      setReactorData(json);
    };

    if (inputedReactor !== '') {
      await fetchReactorData().catch(console.error);
      setIsActive(true);
      e.target.elements.searchReactor.value = '';
    }
  };

  return (
    <>
      <main className='section__main'>
        <Title appTitle='arDB' />
        <Search data={data} searchReactor={searchReactor} />
        <Desc
          appDesc='An open source project dedicated to cataloging advanced nuclear reactor
        technologies.'
        />
        {isActive && (
          <>
            <div className='container__actionIcon'>
              <a className='link__actionIcon' href='#displayResultArea'>
                <span className='button__actionIcon'>
                  <i className='actionIcon fa-solid fa-arrow-down'></i>
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
