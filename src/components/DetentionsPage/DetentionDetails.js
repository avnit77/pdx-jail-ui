import React from 'react';
import PropTypes from 'prop-types';

const DetentionDetails = ({ detention }) => {
  if(detention) {
    return (
      <ul>
        <li>Booking Number: {detention.bookingNumber}</li>
        <li>Booking Date: {detention.bookingDate}</li>
        <li>Arresting Agency: {detention.arrestingAgency}</li>
        <li>Gender: {detention.person.gender}</li>
        <li>Race: {detention.person.race}</li>
        <li>Age: {detention.person.age}</li>
        <li>Height: {detention.person.height}</li>
        <li>Weight: {detention.person.weight}</li>
        <li>Assigned Facility: {detention.currentBookingState.assignedFacility}</li>
        <li>Projected Release Date: {detention.currentBookingState.projectedReleaseDate}</li>
        <li>Release Date: {detention.releaseDate}</li>
        <li>Charges: {detention.currentCaseState && detention.currentCaseState.charges.map((charge) => {
          return (
            <ul key={charge._id}>
              <li>{charge.description}</li>
              <li>Bail: ${charge.bail}</li>
              <li>Status: {charge.status}</li>
            </ul>);})
        }
        </li>
      </ul>
    );
  }
  else return null;
};

DetentionDetails.propTypes = {
  detention: PropTypes.object.isRequired
};

export default DetentionDetails;
