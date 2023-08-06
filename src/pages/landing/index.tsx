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
  let [reactorData, setReactorData] = useState<ReactorInterface>({
    _id: '',
    name: '',
    fullName: '',
    nameWebsite: '',
    designOrg: '',
    designOrgWebsite: '',
    coolant: '',
    moderator: '',
    designStatus: '',
    country: '',
    type: '',
    purpose: '',
    coreHeight: '',
    equivCoreDiameter: '',
    avgLinearHeatRate: '',
    avgFuelPowerDensity: '',
    avgCorePowerDensity: '',
    outerCoreDiameterFuelRods: '',
    rodArray: '',
    latticeGeometry: '',
    numOfFuelAssemblies: '',
    neutronSpectrum: '',
    thermalOutput: '',
    outputGross: '',
    outputNet: '',
    efficiency: '',
    thermodynamicCycle: '',
    nonElecApplications: '',
    fuelMaterial: '',
    claddingMaterial: '',
    reloadFuelEnrichment: '',
    fuelCycleLength: '',
    avgDischargeBurnup: '',
    burnableAbsorber: '',
    controlRodAbsorber: '',
    solubleNeutronAbsorber: '',
    steamFlowRate: '',
    steamPressure: '',
    steamTemp: '',
    feedWaterFlowRate: '',
    feedWaterTemp: '',
    primaryCoolantFlowRate: '',
    operatingPressure: '',
    coolantInletTemp: '',
    coolantOutletTemp: '',
    deltaTemp: '',
    innerDiameterCylindricalShell: '',
    wallThicknessCylindricalShell: '',
    baseMaterial: '',
    totHeightInside: '',
    transportWeight: '',
  });

  // Fetch list of all reactors for search input dropdown
  const { data, isLoading } = useGetAllReactors();

  // Search for reactor via form submit
  const searchReactor = async (e) => {
    try {
      e.preventDefault();
      const inputtedReactor = e.target.elements.searchReactor.value;

      const fetchReactorData = async () => {
        const response = await fetch(
          `https://ardb.cyclic.app/api/${inputtedReactor}`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setReactorData(json);
      };

      if (inputtedReactor !== '') {
        await fetchReactorData();
        setIsActive(true);
        e.target.elements.searchReactor.value = '';
      } else {
        throw new Error('Please enter a reactor name');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
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
