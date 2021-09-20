import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast from "../elem/Toast";
import withConfig from "./withConfig";
import DetailsModal from "../../components/features/Detentions/DetailsModal";

const TableContext = createContext(null);

const TableContextProvider = ({ config, children }) => {
  const [detentions, setDetentions] = useState([]);
  const [persons, setPersons] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation().pathname;
  const { API_URL } = config;
  const ModalCell = ({ id }) => <DetailsModal id={id} />;

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}persons`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        setPersons(response);
      })
      .catch((e) => {
        toast({
          level: "error",
          message:
            "Table context:" +
            (e.message ? e.message : "Unable to connect to the server"),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}detentions`)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.text();
          throw new Error(error);
        }
      })
      .then((response) => {
        setDetentions(response);
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
    if (location === "/detentions") {
      setData(detentions);
    }
    if (location === "/persons") {
      setData(persons);
    }
  }, [location, detentions, persons]);

  const createColumns = () => {
    if (location === "/detentions") {
      return [
        {
          Header: "Booking Number",
          accessor: "bookingNumber",
          disableFilters: true,
        },
        {
          Header: "Booking Date",
          accessor: "bookingData",
          disableFilters: true,
        },
        {
          Header: "Arresting Agency",
          accessor: "arrestingAgency",
        },
        {
          Header: "",
          accessor: "_id",
          disableFilters: true,
          Cell: ({ cell }) => <ModalCell id={cell.value} />,
        },
      ];
    }
    if (location === "/persons") {
      return [
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Race",
          accessor: "race",
        },
        {
          Header: "Age",
          accessor: "age",
        },
        {
          Header: "Height",
          accessor: "height",
          disableFilters: true,
        },
        {
          Header: "Weight",
          accessor: "weight",
          disableFilters: true,
        },
      ];
    }
  };

  console.log(persons, detentions, "dat");

  return (
    <TableContext.Provider
      value={{
        loading,
        data,
        createColumns,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext };
export default withConfig(TableContextProvider);
