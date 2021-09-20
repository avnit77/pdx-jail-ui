/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import withConfig from "../../wrappers/withConfig";

const DeveloperPage = ({ config }) => {
  const { API_URL } = config;
  const params = {
    persons: [
      "?race=White",
      "?gender=Male",
      "count By Race",
      "count By Gender",
      "count By Age Range",
    ],
    detentions: [
      "?arrestingAgency=Gresham+Police+Department",
      "count By Agency",
      "count By Time",
      "avg Detention Duration",
      "avg Detention By Race",
      "avg Detention By Gender",
      "count Charges By Race",
      "count Charges By Gender",
    ],
    courtCases: [],
  };

  const createListItem = (param, header) => {
    const fullURL = API_URL + param;
    return (
      <li>
        <span className="routes">
          {header ? header : `Get ALL ${param.replace(/([A-Z])/g, " $1")} - `}
        </span>
        <a className="paths" href={fullURL} target="_blank">
          {!header ? fullURL : param}
        </a>
      </li>
    );
  };

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
          <p className="notesEmphasis">
            Get ALL routes are paged. Use ?page=[page number] and
            ?perPage=[records per page]
          </p>
          <div className="routes">
            {Object.keys(params).map((key) => {
              return params[key].length ? (
                <>
                  <h3 className="is-size-5 routeHeader">{key} Routes</h3>{" "}
                  <ul>
                    {createListItem(key)}
                    {params[key].map((value) => {
                      const param = `${key}/${value.trim()}`;
                      const title = value.includes("?")
                        ? `Query ALL ${key} by keys - `
                        : value.includes("avg")
                        ? `Get Average ${value.slice(3)} - `
                        : value.includes("Charges")
                        ? `Get Charge Count ${value.slice(14)} - `
                        : `Get ${value} -`;
                      return createListItem(param, title);
                    })}
                  </ul>
                </>
              ) : (
                createListItem(key)
              );
            })}
          </div>
        </section>
        <p className="notesEmphasis" style={{ textAlign: "center" }}>
          PLEASE NOTE: While this project was originally developed in January of
          2020, collection of data for the current version began on August 26,
          2021.
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
          . {<br />} Currently being updated and maintained by{" "}
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

export default withConfig(DeveloperPage);
