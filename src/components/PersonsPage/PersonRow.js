import React from 'react';
import PropTypes from 'prop-types';
import tableStyles from '../common/Table.css';

const PersonRow = ({ person }) => {
  return (
    <tr className={tableStyles.Table}>
      <td>{person.gender}</td>
      <td>{person.race}</td>
      <td>{person.age}</td>
      <td>{person.height}</td>
      <td>{person.weight}</td>
    </tr>
  );
};

PersonRow.propTypes = {
  person: PropTypes.object.isRequired
};

export default PersonRow;
