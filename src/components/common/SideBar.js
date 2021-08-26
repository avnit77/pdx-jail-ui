import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.css';


const SideBar = () => {

  return (
    <div className={styles.SideBar}>
      <section className={styles.navContainer} >
        <NavLink activeClassName={styles.active} exact to='/'>Home</NavLink>
        <NavLink activeClassName={styles.active} to='/detentions'>Detentions</NavLink>
        <NavLink activeClassName={styles.active} to='/persons'>Persons</NavLink>
        <NavLink activeClassName={styles.active} to='/developers'>Developers</NavLink>
      </section>
    </div>
  );

};

export default SideBar;
