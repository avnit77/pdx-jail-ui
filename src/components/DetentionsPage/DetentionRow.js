import React from "react";
import PropTypes from "prop-types";

const DetentionRow = ({
  detention,
  fetchSelectedDetention,
  toggleDetailsModal,
}) => {
  const handleClick = (id) => {
    fetchSelectedDetention(id);
    toggleDetailsModal();
  };

  return (
    <tr className="Table">
      <td>{detention.bookingNumber}</td>
      <td>{detention.bookingDate.slice(0, 10)}</td>
      <td>{detention.arrestingAgency}</td>
      <td>
        {" "}
        <button
          classname="button is-dark is-inverted is-small"
          onClick={() => {
            handleClick(detention._id);
          }}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

DetentionRow.propTypes = {
  detention: PropTypes.object.isRequired,
  fetchSelectedDetention: PropTypes.func.isRequired,
  toggleDetailsModal: PropTypes.func.isRequired,
};

export default DetentionRow;

// Add this code wherever you want the modal-opening button to live...
// import { useModal } from '../../hooks/useModal';
// const [show<MODAL_NAME>Modal, toggle[show<MODAL_NAME>Modal] = useModal();
// In the return...
{
  /* <Modal showModal={show<MODAL_NAME>Modal} toggleModal={toggle<MODAL_NAME>Modal} /> */
}
// <button className={styles.modalButton} type='button' onClick={() => toggle<MODAL_NAME>Modal()}> ? </button>
