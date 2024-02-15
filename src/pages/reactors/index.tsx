import { useState } from 'react';
import CategoryList from '../../components/category-list';
import ReactorCardList from '../../components/reactor-card-list';
import Footer from '../../components/footer';
import { reactorTypeDefinitions } from '../../data/reactorTypeDefinitions';
import { useQuery } from '@tanstack/react-query';
import { getReactorByType, getReactorTypes } from '../../api/reactorsApi';

function Reactors() {
  const [typeInput, setTypeInput] = useState('ALL');
  const reactorTypeInfo = reactorTypeDefinitions[typeInput];

  // Fetch Reactor categories for side bar filtering
  const { data: reactorTypes, isLoading: isLoadingTypes } = useQuery({
    queryKey: ['reactors', 'types'],
    queryFn: getReactorTypes,
  });

  // Fetch Reactors by reactor type (category)
  const { data: filteredReactors, isLoading: isLoadingFiltered } = useQuery({
    queryKey: ['reactors', typeInput],
    // enabled: reactorTypes !== undefined, // when reactorTypes is undefined, query will not run.
    queryFn: () => getReactorByType(typeInput),
  });

  return (
    <section className="section__reactors">
      <div className="container container__reactors">
        <div className="container container__header">
          <h1 className="page__header">
            Open Source Data for Professionals and Developers
          </h1>
          <p className="page__contentDescrip">
            You are exploring all available scraped datasets from all
            categories. Available data includes reactor information related to
            design specifications, reactor core, coolant system, core materials,
            and more. If you find new data or would like to provide updates,
            feel free to login and submit a request.
          </p>
        </div>
      </div>
      <div className="container container__flex">
        {/* sidebar containing filtering for reactors */}
        <div className="col col--side">
          <div className="container__sidebar">
            <h2 className="sidebar__title">Categories</h2>
            <CategoryList
              categories={reactorTypes}
              isLoading={isLoadingTypes}
              setTypeInput={setTypeInput}
            />
          </div>
        </div>
        {/* Displays all reactors in cards */}
        <div className="col col--main">
          <div id="content" className="container__scrollMain">
            {/* Section Display Description */}
            <h2>{reactorTypeInfo?.title && reactorTypeInfo.title}</h2>
            <p>{reactorTypeInfo?.desc && reactorTypeInfo.desc}</p>

            <ReactorCardList
              reactors={filteredReactors}
              isLoading={isLoadingFiltered}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Reactors;
