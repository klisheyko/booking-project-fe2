import React from "react";
import {v4 as uuidv4} from 'uuid';

const FooterMenu = () => {

  const footerMenu = [
    {
      id: uuidv4(),
      title: 'Support',
    },
    {
      id: uuidv4(),
      title: 'Help Center',
    },
    {
      id: uuidv4(),
      title: 'Cancellation options',
    },
    {
      id: uuidv4(),
      title: 'Air Cover',
    },


  ]

  return (
    <div>
      <ul>
        {footerMenu.map((element) => (
          <li key={element.id}>
            <strong>{element.title}</strong>
          </li>


        ))}
      </ul>
    </div>
  )
}

export default FooterMenu;
