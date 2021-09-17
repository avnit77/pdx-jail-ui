import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/features/LandingPage";
import PersonsPage from "./components/features/Persons/PersonsPage";
import DetentionsPage from "./components/features/Detentions/DetentionsPage";
import DeveloperPage from "./components/features/Developer/DeveloperPage";
import Header from "./components/elem/Header";
import SideBar from "./components/elem/SideBar";
import PopulationContextProvider from "./components/wrappers/PopulationContext";

const App = () => {
  //to do: add parameter context wrapper
  return (
    <>
      <Header />
      <SideBar />
      <div className="pageBody">
        <Router>
          <Switch>
            <PopulationContextProvider>
              <Route exact path="/" component={HomePage} />
            </PopulationContextProvider>
            <Route path="/persons" component={PersonsPage} />
            <Route path="/detentions" component={DetentionsPage} />
            <Route path="/developers" component={DeveloperPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
