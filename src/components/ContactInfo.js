import React from 'react';

const ContactInfo = () => {
  const companyInfo = {
    name: 'Booking inc',
    address:
      {
        city: 'OH',
        street: 'Main',
        building: 302
      },
    phone: '267-1234567',
    email: 'booking@gmail.com'

  }
  return (
    <div>
      <h3>{companyInfo.name}:</h3>
      <i>{companyInfo.address.building + ' ' + companyInfo.address.street + ' ' + companyInfo.address.city}</i>
      <div>
        <br/><strong>Our contacts:</strong>
        <br/>tel. {companyInfo.phone}
        <br/>email: {companyInfo.email}
      </div>
    </div>
  )
}

export default ContactInfo;
