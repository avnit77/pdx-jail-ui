import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/features/LandingPage";
import PersonsPage from "./components/features/Persons/PersonsPage";
import DetentionsPage from "./components/features/Detentions/DetentionsPage";
import DeveloperPage from "./components/features/Developer/DeveloperPage";
import Header from "./components/elem/Header";
import SideBar from "./components/elem/SideBar";
import PopulationContextProvider from "./components/wrappers/PopulationContext";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <SideBar />
        <PopulationContextProvider>
          <Route exact path="/" component={HomePage} />
          <Route path="/persons" component={PersonsPage} />
          <Route path="/detentions" component={DetentionsPage} />
          <Route path="/developers" component={DeveloperPage} />
        </PopulationContextProvider>
      </Router>
    </>
  );
};

export default App;
