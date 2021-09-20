import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();

  return (
    <div className="DynamicDataDisplay">
      <h3>{children}</h3>
      <div className="dataSection">
        {data === 0 ? (
          <LoadingSpinner />
        ) : (
          <p>
            {data.toFixed(1)}
            <span> Days</span>
          </p>
        )}
      </div>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired,
};

export default DynamicDataDisplay;
