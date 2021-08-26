import React from 'react';
import PropTypes from 'prop-types';
import styles from './DynamicDataDisplay.css';


const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  if(data === 0) return (

    <div className={styles.DynamicDataDisplay}>
      <h3>{children}</h3>
      <div className={styles.dataSection}>
        <p>Loading</p>
      </div>
    </div>
  );
  return (

    <div className={styles.DynamicDataDisplay}>
      <h3>{children}</h3>
      <div className={styles.dataSection}>
        <p>{data.toFixed(1)}
          <span> Days</span>
        </p>
      </div>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
