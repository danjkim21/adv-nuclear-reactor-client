import Title from './components/title';
import Search from './components/search';
import Desc from './components/desc';
import ReactorDisplay from '../../components/reactor-display';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { getReactorById } from '../../api/reactorsApi';

function Landing() {
  const [selection, setSelection] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const onInputSelection = (selectOption) => {
    setSelection(selectOption.value);
  };

  const onSearchReactor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(selection);
  };

  const { data: reactorData, isSuccess } = useQuery({
    queryKey: ['reactors', input],
    queryFn: () => getReactorById(input),
  });

  useEffect(() => {
    if (isSuccess && reactorData) {
      const scrollTimer = setTimeout(() => {
        const displayArea = document.getElementById('displayResultArea');
        if (displayArea) {
          displayArea.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 2300);

      return () => clearTimeout(scrollTimer);
    }
  }, [isSuccess, reactorData]);

  return (
    <>
      <main className="section__main">
        <Title appTitle="arDB" />
        <Desc appDesc="Explore, Research, Support - Advanced reactor resources and data aggregated for policy professionals, reactor developers, tech enthusiasts. An open source project dedicated to cataloging advanced nuclear reactor technologies. " />
        <Search
          handleInputSelection={onInputSelection}
          handleSearchReactor={onSearchReactor}
        />

        <div className="container container__appDivider">
          <span className="appDivider__text">or</span>
        </div>

        <div className="container container__appButtons">
          <Link className="btn_secondary" to="/reactors">
            Browse All
          </Link>
        </div>

        {isSuccess && (
          <>
            <div className="container__actionIcon">
              <a className="link__actionIcon" href="#displayResultArea">
                <span className="button__actionIcon">
                  <FontAwesomeIcon className="actionIcon" icon={faArrowDown} />
                </span>
              </a>
            </div>
          </>
        )}
      </main>

      {isSuccess && reactorData !== undefined && (
        <ReactorDisplay reactorData={reactorData} />
      )}
    </>
  );
}

export default Landing;
