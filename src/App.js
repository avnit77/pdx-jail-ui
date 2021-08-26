import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import PersonsPage from './components/PersonsPage/PersonsPage';
import DetentionsPage from './components/DetentionsPage/DetentionsPage';
import DeveloperPage from './components/DeveloperPage/DeveloperPage';
import Header from './components/common/Header';
import SideBar from './components/common/SideBar';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <SideBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/persons' component={PersonsPage} />
        <Route path='/detentions' component={DetentionsPage} />
        <Route path='/developers' component={DeveloperPage} />
      </Router>
    </>
  );
}