import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => {

  return (
    <div className="SideBar">
      <section className="navContainer" >
        <NavLink activeClassName="active" exact to='/'>Home</NavLink>
        <NavLink activeClassName="active" to='/detentions'>Detentions</NavLink>
        <NavLink activeClassName="active" to='/persons'>Persons</NavLink>
        <NavLink activeClassName="active" to='/developers'>Developers</NavLink>
      </section>
    </div>
  );

};

export default SideBar;
