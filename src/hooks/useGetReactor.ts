import { useEffect, useState } from 'react';

export default function useGetReactor(input) {
  const [data, setData] = useState<ReactorInterface>({
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

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetchData(input);
  }, [input]);

  const fetchData = async (input) => {
    try {
      if (input !== '') {
        setIsLoading(true);
        const response = await fetch(`https://ardb.cyclic.app/api/${input}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setData(json);
        setIsLoading(false);
        setIsActive(true);
      } else {
        throw new Error('Please enter a reactor name');
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return { data, isLoading, isError, error, isActive };
}
