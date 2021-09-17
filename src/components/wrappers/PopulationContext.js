import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast from "../elem/Toast";
import withConfig from "./withConfig";

const PopulationContext = createContext(null);

const PopulationContextProvider = ({ config, children }) => {
  const [raceCount, setRaceCount] = useState({});
  const [genderCount, setGenderCount] = useState({});
  const [agencies, setAgencies] = useState([]);
  const [agencyChart, setAgencyChart] = useState([]);
  const [dailyCount, setDailyCount] = useState([]);

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { API_URL } = config;

  useEffect(() => {
    setLoading(true); 
    fetch(`${API_URL}persons/countByGender`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        const count = response.reduce((obj, item) => {
          return (obj[item._id] = item.count), obj;
        }, {});
        setGenderCount(count);
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
  }, [API_URL]);

  useEffect(() => {
    setLoading(true); 
    fetch(`${API_URL}detentions/countByAgency`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        const list = response.map((item)=> item._id)

        setAgencies(list);
        setAgencyChart(response.map((item) => [item._id, item.count]));
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
  }, [API_URL]);

  useEffect(() => {
    setLoading(true); 
    fetch(`${API_URL}dailyCounts`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        const counts = response.counts.map((item) => [
          item.date.toString().slice(0, -14),
          item.count,
        ]);
        setDailyCount(counts);
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
  }, [API_URL]);

  useEffect(() => {
    setLoading(true); 
    fetch(`${API_URL}persons/countByRace`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        const count = response.reduce((obj, item) => {
          if (item._id === "Native American or Alaskan") {
            item._id = "Native";
          }

          return (obj[item._id] = item.count), obj;
        }, {});
        setRaceCount(count);
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
  }, [API_URL]);

  return (
    <PopulationContext.Provider
      value={{
        loading,
        raceCount,
        genderCount,
        agencies,
        agencyChart,
        dailyCount,
      }}
    >
      {children}
    </PopulationContext.Provider>
  );
};

export { PopulationContext };
export default withConfig(PopulationContextProvider);
