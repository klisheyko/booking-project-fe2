import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Offers = () => {
  const villas = [
    {
      id: uuidv4(),
      title: 'villa sea view',
      address: {
        city: 'NY',
        street: 'Hopkins Ct',
        building: 310
      },
      price: 200,
      discription: 'two bedroom 1900 sqrt',
    },
    {
      id: uuidv4(),
      title: 'villa mountain view',
      address: {
        city: 'CA',
        street: 'Washington St',
        building: 20
      },
      price: 400,
      discription: 'two bedroom 2300 sqrt',
    },
    {
      id: uuidv4(),
      title: 'villa Street view',
      address: {
        city: 'Broncs',
        street: 'Flowers St',
        building: 230
      },
      price: 450,
      discription: 'two bedroom 4000 sqrt',
    }
  ]
  return (
    <ul>
      {villas.map((element) => (
        <li key={element.id}>
          <hr/>
          {/*strong выводит жирным шрифтом текст*/}
          <strong>{element.title}</strong>
          <br/> <i> {element.address.building + '  ' + element.address.street + '  ' + element.address.city} </i>
          <br/> {element.discription}
          <br/> Price: ${element.price}
        </li>))}
    </ul>
  );
};
export default Offers;
