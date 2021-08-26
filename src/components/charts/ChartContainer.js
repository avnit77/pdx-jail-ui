import React from 'react';
import DetentionsOverTimeChart from './DetentionsOverTime';
import DetentionsByRaceChart from './DetentionsByRace';
import DetentionsByGenderChart from './DetetionsByGender';
import PopulationByRaceChart from './PopulationByRace';
import DetentionsByRacePreHundredThousandChart from './DetentionsByRacePerHundredThousand';
import DetentionsByAgencyChart from './DetentionsByAgency';
import styles from './ChartContainer.css';

const Charts = () => {

  return (
    <main className={styles.ChartContainer}>
      <DetentionsOverTimeChart /><br/>
      <PopulationByRaceChart /><br/>
      <DetentionsByRaceChart /><br/>
      <DetentionsByRacePreHundredThousandChart /><br/>
      <DetentionsByGenderChart /><br/>
      <DetentionsByAgencyChart /><br/>
    </main>
  );
};

export default Charts;
