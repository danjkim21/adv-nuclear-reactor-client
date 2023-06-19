import { useState } from 'react';
import CategoryList from '../../components/category-list';
import ReactorCard from '../../components/reactor-card';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useGetReactorTypes from '../../hooks/useGetReactorTypes';
import useGetReactorsByType from '../../hooks/useGetReactorsByType';

const reactorTypeDefinitions = {
  ALL: { title: 'All Reactors', desc: '' },
  BWR: {
    title: 'Boiling Water Reactors',
    desc: 'Boiling light water cooled and moderated reactor. In a BWR, the reactor core heats water, which turns to steam and then drives a steam turbine.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  GCR: {
    title: 'Gas Cooled Reactors',
    desc: 'A gas-cooled reactor is a nuclear reactor that uses graphite as a neutron moderator and carbon dioxide (helium can also be used) as coolant.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  GFR: {
    title: 'Gas-Cooled Fast Reactors',
    desc: 'The GFR system is a high-temperature helium-cooled fast-spectrum reactor with a closed fuel cycle. It combines the advantages of fast-spectrum systems for long-term sustainability of uranium resources and waste minimisation (through fuel multiple reprocessing and fission of long-lived actinides), with those of high-temperature systems (high thermal cycle efficiency and industrial use of the generated heat, for hydrogen production for example).',
    source: 'https://www.gen-4.org/gif/jcms/c_9357/gfr',
  },
  HWR: {
    title: 'Heavy Water Reactors',
    desc: 'Heavy Water Reactors commonly use unenriched natural uranium as its fuel and heavy water (deuterium oxide D2O) as its coolant and moderator.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  LFR: {
    title: 'Lead-Cooled Fast Reactors',
    desc: 'The Lead-cooled Fast Reactors (LFRs) feature a fast neutron spectrum, high temperature operation, and cooling by either molten lead or lead-bismuth eutectic (LBE), both of which support low-pressure operation, have very good thermodynamic properties, and are relatively inert with regard to interaction with air or water. ',
    source:
      'https://www.gen-4.org/gif/jcms/c_42149/lead-cooled-fast-reactor-lfr',
  },
  MSR: {
    title: 'Molten Salt Cooled Reactors',
    desc: 'Molten Salt Cooled Reactors are a class of nuclear fission reactors where a molten salt mixture is used as the coolant which at the same time can be the fuel. MSRs run at higher temperatures thus increasing the thermodynamic efficiency, while staying at low vapor pressure. They can be operated at near atmospheric pressures thus reduces the mechanical stress endured by the system and simplifying aspects of reactor design and improving safety.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  PWR: {
    title: 'Pressurised Water Reactors',
    desc: 'In a Pressurised Water Reactors, the reactor core heats water, which does not boil. This hot water then exchanges heat with a lower pressure water system, which turns to steam and drives the turbine.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  SCWR: {
    title: 'Supercritical Water Cooled Reactors',
    desc: 'Supercritical Water Cooled Reactors enables a higher thermal efficiency, as well as simplification in the balance of plant, due to the fact that there are no phase changes in the reactor. SCWRs are directly coupled to the energy conversion equipment and uses uranium oxide as a fuel. These reactors may have a thermal or fast-spectrum reactor and passive safety features are incorporated similar to those of simplified boiling water reactors.',
    source: 'https://aris.iaea.org/sites/Publications.html',
  },
  SFR: {
    title: 'Sodium-Cooled Fast Reactors',
    desc: 'The SFR uses liquid sodium as the reactor coolant, allowing high power density with low coolant volume fraction and operation at low pressure. While the oxygen-free environment prevents corrosion, sodium reacts chemically with air and water and requires a sealed coolant system.',
    source: 'https://www.gen-4.org/gif/jcms/c_9361/sfr',
  },
  'SMR (micro)': { title: 'Small Modular Reactors (micro)', desc: '' },
  iPWR: {
    title: 'Integral Pressurised Water Reactors',
    desc: 'In this design, primary circuit components are placed within the reactor pressure vessel, eliminating the need for primary circuit pipework, with the intention of enhancing safety and reliability.',
    source:
      'https://www.iaea.org/publications/12201/integral-pressurized-water-reactor-simulator-manual',
  },
};

function Reactors() {
  const [typeInput, setTypeInput] = useState('ALL');
  const reactorTypeInfo = reactorTypeDefinitions[typeInput];

  // Fetch Reactor categories for side bar filtering
  const { data: reactorTypes, isLoading: isLoadingTypes } =
    useGetReactorTypes();

  // Fetch Reactors by reactor type (category)
  const { data: filteredReactors, isLoading: isLoadingFiltered } =
    useGetReactorsByType(typeInput);

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
            {isLoadingTypes && <FontAwesomeIcon icon={faSpinner} spinPulse />}
            {!isLoadingTypes && (
              <CategoryList
                categories={reactorTypes}
                isLoading={isLoadingTypes}
                setTypeInput={setTypeInput}
              />
            )}
          </div>
        </div>
        {/* Displays all reactors in cards */}
        <div className='col col--main'>
          <div className='container__scrollMain'>
            <h2>{reactorTypeInfo?.title && reactorTypeInfo.title}</h2>
            <p>{reactorTypeInfo?.desc && reactorTypeInfo.desc}</p>
            {isLoadingFiltered && (
              <FontAwesomeIcon icon={faSpinner} spinPulse />
            )}
            {!isLoadingFiltered && (
              <ReactorCard
                data={filteredReactors}
                isLoading={isLoadingFiltered}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Reactors;
