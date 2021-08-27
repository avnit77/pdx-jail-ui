import React from 'react';
import styles from './HomePage.css';
import Charts from '../charts/ChartContainer';

const HomePage = () => {

  return (
    <section className={styles.bodyContainer}>
      <Charts />
    </section>
  );
};

export default HomePage;
