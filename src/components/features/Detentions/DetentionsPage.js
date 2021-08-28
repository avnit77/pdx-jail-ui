import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import useDetentions from "../../../hooks/useDetentions";
import useDetention from "../../../hooks/useDetention";
import DetentionRow from "./DetentionRow";
import Paging from "../../elem/Paging";
import DetailsModal from "./DetailsModal";
import { useDetailsModal } from "../../../hooks/useDetailsModal";
import { PopulationContext } from "../../wrappers/PopulationContext";

const DetentionsPage = () => {
  const { toggleDetailsModal, showDetailsModal } = useDetailsModal();
  const [arrestingAgency, setArrestingAgency] = useState(0);
  const history = useHistory();
  const { detentions } = useDetentions();
  const {
    detention: selectedDetention,
    fetchDetention: fetchSelectedDetention,
  } = useDetention();
  const { agencies } = useContext(PopulationContext);


  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    arrestingAgency && newSearchParams.set("arrestingAgency", arrestingAgency);
    history.push(`/detentions?${newSearchParams}`);
  };
  return (
    <main className="pageBody">
      <section className="section">
        <h1 className="title is-size-4">
          Search all Detentions by Arresting Agency
        </h1>
        <div className="controlsContainer">
          <div className="QueryControls">
            <label className="label" style={{ marginBottom: ".5rem" }}>
              Arresting Agency:{" "}
              <select
                className="dropdown"
                onChange={({ target }) => setArrestingAgency(target.value)}
              >
                <option value="">Any</option>
                {agencies.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <button
            className="button is-small is-dark is-outlined"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <table className="Table">
          <thead>
            <tr>
              <th>
                <h4>Booking Number</h4>
              </th>
              <th>
                <h4>Booking Date</h4>
              </th>
              <th>
                <h4>Arresting Agency</h4>
              </th>
              <th>
                <h4>Booking Details</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {detentions.map((detention) => (
              <DetentionRow
                key={detention._id}
                fetchSelectedDetention={fetchSelectedDetention}
                detention={detention}
                toggleDetailsModal={toggleDetailsModal}
              />
            ))}
          </tbody>
        </table>
        <Paging />
        <DetailsModal
          detention={selectedDetention}
          showDetailsModal={showDetailsModal}
          toggleDetailsModal={toggleDetailsModal}
        />
      </section>
    </main>
  );
};

export default DetentionsPage;
