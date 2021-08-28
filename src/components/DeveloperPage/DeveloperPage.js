/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const DeveloperPage = () => {
  return (
    <>
      <main className="DeveloperPage section">
        <h1 className="is-size-3">About MCDC Data</h1>
        <p>
          MCDC data is a public resource for information regarding detentions in
          Multnomah County, Oregon. The data is collected daily from the
          Multnomah County Detention Center{" "}
          <a href="http://www.mcso.us/PAID/">inmate information page.</a> The
          API routes below provide direct access to the data for researchers.
        </p>

        <section className="smallSection">

        <p>
          <span className="notesEmphasis">
            Get ALL routes are paged. Use ?page=[page number] and
            ?perPage=[records per page]
          </span>
        </p>
        <div className="routes">
          <h3 className="is-size-5">Person Routes</h3>
          <ul>
            <li>
              <span className="routes">Get ALL persons -</span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons"
                target="_blank"
              >
                https://jail-data-pdx.herokuapp.com/api/v1/persons
              </a>
            </li>
            <li>
              <span className="routes">Query person subsets by keys - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons/?race=White"
                target="_blank"
              >
                /?race=White
              </a>{" "}
              or{" "}
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons/?gender=Male"
                target="_blank"
              >
                /?gender=Male
              </a>
            </li>
            <li>
              <span className="routes">Get count by RACE - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons/countByRace"
                target="_blank"
              >
                /countByRace
              </a>
            </li>
            <li>
              <span className="routes">Get count by GENDER - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons/countByGender"
                target="_blank"
              >
                /countByGender
              </a>
            </li>
            <li>
              <span className="routes">Get count by AGE - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/persons/countByAgeRange"
                target="_blank"
              >
                /countByAgeRange
              </a>
            </li>
          </ul>
          <br/>
          <h3 className="is-size-5">Detention Routes</h3>
          <ul>
            <li>
              <span className="routes">Get ALL detentions - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions"
                target="_blank"
              >
                https://jail-data-pdx.herokuapp.com/api/v1/detentions
              </a>
            </li>
            <li>
              <span className="routes">Query detention subsets by keys - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/?arrestingAgency=Gresham+Police+Department"
                target="_blank"
              >
                /?arrestingAgency=Gresham+Police+Department
              </a>
            </li>
            <li>
              <span className="routes">Get count by AGENCY - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/countByAgency"
                target="_blank"
              >
                /countByAgency
              </a>
            </li>
            <li>
              <span className="routes">Get count by BOOKING TIME - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/countByTime"
                target="_blank"
              >
                /countByTime
              </a>
            </li>
            <li>
              <span className="routes">Get average detention DURATION - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/avgDetentionDuration"
                target="_blank"
              >
                /avgDetentionDuration
              </a>
            </li>
            <li>
              <span className="routes">Get average duration by RACE - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/avgDetentionByRace"
                target="_blank"
              >
                /avgDetentionByRace
              </a>
            </li>
            <li>
              <span className="routes">Get average detention by GENDER - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/avgDetentionByGender"
                target="_blank"
              >
                /avgDetentionByGender
              </a>
            </li>
            <li>
              <span className="routes">Get CHARGE count by RACE - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/countChargesByRace"
                target="_blank"
              >
                /countChargesByRace
              </a>
            </li>
            <li>
              <span className="routes">Get charge count by GENDER- </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/detentions/countChargesByGender"
                target="_blank"
              >
                /countChargesByGender
              </a>
            </li>
            <li>
              <span className="routes">Get ALL court cases - </span>
              <a
                className="paths"
                href="https://jail-data-pdx.herokuapp.com/api/v1/courtCases"
                target="_blank"
              >
                https://jail-data-pdx.herokuapp.com/api/v1/courtCases
              </a>
            </li>
          </ul>
        </div>
        </section>
        <p>
          <span className="notesEmphasis">
            PLEASE NOTE: While this project was originally developed in January of
            2020, collection of data for the current version began on August 26,
            2021.
          </span>
        </p>
        <p className="is-size-7">
          Originally developed by{" "}
          <a
            href="https://github.com/munizao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ali Muniz
          </a>
          ,{" "}
          <a
            href="https://github.com/JMoneymaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamin Moneymaker
          </a>
          ,{" "}
          <a
            href="https://github.com/avnit77"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tali Avni
          </a>
          ,{" "}
          <a
            href="https://github.com/AaronMullan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aaron Mullan
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/NickBrimmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nick Brimmer
          </a>
          . {<br/>} Currently being updated and maintained by{" "}
          <a
            href="https://github.com/avnit77"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tali Avni
          </a>
        </p>
        <div className="about"></div>
      </main>
    </>
  );
};

export default DeveloperPage;
