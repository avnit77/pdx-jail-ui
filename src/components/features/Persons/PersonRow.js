import React from "react";
import PropTypes from "prop-types";

const PersonRow = ({ person }) => {
  return (
    <tr className="Table">
      <td>{person.gender}</td>
      <td>{person.race}</td>
      <td>{person.age}</td>
      <td>{person.height}</td>
      <td>{person.weight}</td>
    </tr>
  );
};

PersonRow.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonRow;
