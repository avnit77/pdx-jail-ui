import React, {useContext} from 'react';
import DetentionsOverTimeChart from './DetentionsOverTime';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetentionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';
import { PopulationContext } from '../../wrappers/PopulationContext';

const Charts = () => {
  const {
    raceCount,
    genderCount,
    agencyChart,
    dailyCount
} = useContext(PopulationContext)

  return (
    <main className="ChartContainer">
      <DetentionsOverTimeChart detentionCounts={dailyCount}/>
      <PopulationByRaceChart />
      <DetentionsByRaceChart population={raceCount}/>
      <DetentionsByRacePreHundredThousandChart population={raceCount}/>
      <DetentionsByGenderChart population={genderCount}/>
      <DetentionsByAgencyChart dataPoints={agencyChart}/>
    </main>
  );
};

export default Charts;
