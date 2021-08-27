import React from 'react';
import PropTypes from 'prop-types';

const DetailsModal = ({ detention, showDetailsModal, toggleDetailsModal }) => {
  if(detention) {
    return (
      <section>
        <div className={`DetailsModal ${showDetailsModal ? "modalShow" : "modalHide"}`}>
          <div>
            <button className="closeButton" type='button' onClick={toggleDetailsModal}>&times;</button>
            <div className="categoryDetails">
              <h3>Demographic info:</h3>
              <ul>
                <li><span className="key">Gender: </span>{detention.person.gender}</li>
                <li><span className="key">Race: </span>{detention.person.race}</li>
                <li><span className="key">Age: </span>{detention.person.age}</li>
                <li><span className="key">Height: </span>{detention.person.height}</li>
                <li><span className="key">Weight: </span>{detention.person.weight}</li>
              </ul>
            </div>
            <div className="categoryDetails">
              <h3>Booking info:</h3>
              <ul>
                <li><span className="key">Booking Number: </span>{detention.bookingNumber}</li>
                <li><span className="key">Booking Date: </span>{detention.bookingDate.slice(0, 10)}</li>
                <li><span className="key">Release Date: </span>{detention.releaseDate.slice(0, 10)}</li>
                <li><span className="key">Arresting Agency: </span>{detention.arrestingAgency}</li>
                <li><span className="key">Assigned Facility: </span>{detention.currentBookingState.assignedFacility}</li>
              </ul>
            </div>
            <div className="categoryDetails">
              <h3>Charges:</h3>
              {detention.currentCaseState && detention.currentCaseState.charges.map((charge) => {
                return (
                  <ul key={charge._id}>
                    <li>{charge.description}</li>
                    <li><span className="key">Bail: </span>${charge.bail}</li>
                    <li><span className="key">Status: </span>{charge.status}</li>
                  </ul>);})
              }
            </div>
          </div>
        </div>
      </section>

    );
  }
  else return null;
};

DetailsModal.propTypes = {
  showDetailsModal: PropTypes.bool.isRequired,
  toggleDetailsModal: PropTypes.func.isRequired
};

export default DetailsModal;

// Add this code wherever you want the modal-opening button to live...
// import { useModal } from '../../hooks/useModal';
// const [show<MODAL_NAME>Modal, toggle[show<MODAL_NAME>Modal] = useModal();
// In the return...
{/* <Modal showModal={show<MODAL_NAME>Modal} toggleModal={toggle<MODAL_NAME>Modal} /> */}
// <button className={styles.modalButton} type='button' onClick={() => toggle<MODAL_NAME>Modal()}> ? </button>
