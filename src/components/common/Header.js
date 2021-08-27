import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Header.css';
import DynamicDataDisplay from '../HomePage/DynamicDataDisplay';
import useAverageDetention from '../../hooks/useAverageDetention';


const Header = () => {

  return (
    <section className={styles.Header}>
      <h4>MultCo Jail Data</h4>
      <div>
        <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay>
      </div>
    </section>
  );

};

export default Header;
