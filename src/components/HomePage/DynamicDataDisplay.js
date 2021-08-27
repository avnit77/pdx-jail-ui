import React from 'react';
import PropTypes from 'prop-types';


const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  if(data === 0) return (

    <div className="DynamicDataDisplay">
      <h3>{children}</h3>
      <div className="dataSection">
        <p>Loading</p>
      </div>
    </div>
  );
  return (

    <div className="DynamicDataDisplay">
      <h3>{children}</h3>
      <div className="dataSection">
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
