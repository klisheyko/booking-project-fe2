import React from 'react';
import SiteName from "./SiteName";

const Menu = () => {
  const headerMenu = ['Home', 'Apartments', 'Villas', 'TownHouses']

  return (
    <div>
      {headerMenu.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  )
}


export default Menu;
