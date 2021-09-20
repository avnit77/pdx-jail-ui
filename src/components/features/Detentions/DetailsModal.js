import React, { useState } from "react";
import PropTypes from "prop-types";
import useModal from "../../../utils/useModal";
import withConfig from "../../wrappers/withConfig";
import Modal from "../../elem/Modal";
import toast from "../../elem/Toast";
import LoadingSpinner from "../../elem/LoadingSpinner";

const DetailsModal = ({ id, config }) => {
  const { isShowing, toggle } = useModal();
  const [detention, setDetention] = useState();
  const [loading, setLoading] = useState(false);
  const { API_URL } = config;

  const handleOpen = () => {
    fetchDetention(id);
    toggle();
  };

  const fetchDetention = (id) => {
    if (id) {
      setLoading(true);
      fetch(`${API_URL}detentions/${id}`)
        .then(async (response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          } else {
            console.log("err");
            const error = await response.text();
            throw new Error(error);
          }
        })
        .then((response) => {
          console.log("resp");
          setDetention(response);
        })
        .catch((e) => {
          toast({
            level: "error",
            message:
              "Population context:" +
              (e.message ? e.message : "Unable to connect to the server"),
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return isShowing ? (
    loading ? (
      <LoadingSpinner />
    ) : (
      <Modal
        body={
          detention ? (
            <>
              <div className="categoryDetails">
                <h3>Demographic info</h3>
                <ul>
                  <li>
                    <span className="key">Gender: </span>
                    {detention.person.gender}
                  </li>
                  <li>
                    <span className="key">Race: </span>
                    {detention.person.race}
                  </li>
                  <li>
                    <span className="key">Age: </span>
                    {detention.person.age}
                  </li>
                  <li>
                    <span className="key">Height: </span>
                    {detention.person.height}
                  </li>
                  <li>
                    <span className="key">Weight: </span>
                    {detention.person.weight}
                  </li>
                </ul>
              </div>
              <div className="categoryDetails">
                <h3>Booking info</h3>
                <ul>
                  <li>
                    <span className="key">Booking Number: </span>
                    {detention.bookingNumber}
                  </li>
                  <li>
                    <span className="key">Booking Date: </span>
                    {detention.bookingDate.slice(0, 10)}
                  </li>
                  <li>
                    <span className="key">Release Date: </span>
                    {detention.releaseDate.slice(0, 10)}
                  </li>
                  <li>
                    <span className="key">Arresting Agency: </span>
                    {detention.arrestingAgency}
                  </li>
                  <li>
                    <span className="key">Assigned Facility: </span>
                    {detention.currentBookingState.assignedFacility}
                  </li>
                </ul>
              </div>
              <div className="categoryDetails">
                <h3>Charges</h3>
                {detention.currentCaseState &&
                  detention.currentCaseState.charges.map((charge) => {
                    return (
                      <ul key={charge._id}>
                        <li>{charge.description}</li>
                        <li>
                          <span className="key">Bail: </span>${charge.bail}
                        </li>
                        <li>
                          <span className="key">Status: </span>
                          {charge.status}
                        </li>
                      </ul>
                    );
                  })}
              </div>
            </>
          ) : null
        }
        toggle={toggle}
      />
    )
  ) : (
    <div className="modalButton button" onClick={handleOpen}>
      Details
    </div>
  );
};

DetailsModal.propTypes = {
  showDetailsModal: PropTypes.bool.isRequired,
  toggleDetailsModal: PropTypes.func.isRequired,
};

export default withConfig(DetailsModal);
