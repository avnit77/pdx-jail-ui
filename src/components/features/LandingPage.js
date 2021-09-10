import React, { useContext } from "react";
import Charts from "../elem/Charts/ChartContainer";
import { PopulationContext } from "../wrappers/PopulationContext";
import LoadingSpinner from "../elem/LoadingSpinner";

const HomePage = () => {
  const { loading } = useContext(PopulationContext);

  return (
    <section className="bodyContainer">
      {!loading ? <Charts /> : <LoadingSpinner />}
    </section>
  );
};

export default HomePage;
