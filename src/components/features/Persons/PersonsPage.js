import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import usePersons from "../../../hooks/usePersons";
import PersonRow from "./PersonRow";
import Paging from "../../elem/Paging";

const PersonsPage = () => {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const history = useHistory();
  const { persons } = usePersons();
  const handleClick = () => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("minAge", minAge);
    newSearchParams.set("maxAge", maxAge);
    gender && newSearchParams.set("gender", gender);
    race && newSearchParams.set("race", race);
    history.push(`/persons?${newSearchParams}`);
  };

  //to do: reusable table component, add more table functionality, improve styling
  return (
    <main className="pageBody">
      <section className="section">
        <h1 className="title is-size-4">
          Sort Bookings By Age, Race, and Gender
        </h1>
        <div className="controlsContainer">
          <div className="QueryControls">
            <label className="label">
              Minimum age:{" "}
              <input
                type="number"
                value={minAge}
                onChange={({ target }) => setMinAge(target.value)}
              />
            </label>
            <label className="label">
              Maximum Age:{" "}
              <input
                type="number"
                value={maxAge}
                onChange={({ target }) => setMaxAge(target.value)}
              />
            </label>
            <label className="label">
              Gender:{" "}
              <select
                className="dropdown"
                onChange={({ target }) => setGender(target.value)}
              >
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="label">
              Race:{" "}
              <select
                className="dropdown"
                onChange={({ target }) => setRace(target.value)}
              >
                <option value="">Any</option>
                <option value="Black">Black</option>
                <option value="Hispanic">Hispanic</option>
                <option value="P">Pacific Islander</option>
                <option value="Asian">Asian</option>
                <option value="White">White</option>
                <option value="Native American or Alaskan">
                  Native American or Alaskan
                </option>
                <option value="Unknown">Unknown</option>
              </select>
            </label>
          </div>
          <button
            className="button is-small is-outlined is-dark"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <table className="Table">
          <thead>
            <tr>
              <th>
                <h4>Gender</h4>
              </th>
              <th>
                <h4>Race</h4>
              </th>
              <th>
                <h4>Age</h4>
              </th>
              <th>
                <h4>Height</h4>
              </th>
              <th>
                <h4>Weight</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <PersonRow key={person._id} person={person} />
            ))}
          </tbody>
        </table>
        <Paging />
      </section>
    </main>
  );
};

export default PersonsPage;
