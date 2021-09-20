import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/features/LandingPage";
import DeveloperPage from "./components/features/Developer/DeveloperPage";

import DataPanel from "./components/features/DataPanel";
import Header from "./components/elem/Header";
import SideBar from "./components/elem/SideBar";
import TableContextProvider from "./components/wrappers/TableContext";
import PopulationContextProvider from "./components/wrappers/PopulationContext";

const App = () => {
  //to do: add parameter context wrapper
  return (
    <>
      <Header />
      <Router>
        <SideBar />
        <Switch>
          <Route path={["/detentions", "/persons"]}>
            <TableContextProvider>
              <DataPanel />
            </TableContextProvider>
          </Route>
          <Route path="/developers" component={DeveloperPage} />
          <PopulationContextProvider>
            <Route exact path="/" component={HomePage} />
          </PopulationContextProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
