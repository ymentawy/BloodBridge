import React from 'react';
import DonorCard from '../components/DonorCard';

function Donors() {
  const donors = [
    { name: 'John Doe', bloodtype: 'A+', age: 12 },
    { name: 'ZZZZZZZZZZZZ ZZZZZZZZZZZZZZZZZZ', bloodtype: 'B-', age: 10 },
    { name: 'Jane Smith', bloodtype: 'B-', age: 10 },
    { name: 'Jane Smith', bloodtype: 'B-', age: 10 },
    { name: 'Jane Smith', bloodtype: 'B-', age: 10 },
  ];

  return (
    <div>
    <div style={{ display: 'flex', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div style={{marginLeft:'110px', marginRight: '385px' }}>Name</div>
      <div style={{ marginRight: '40px' }}>Age</div>
      <div style={{ marginRight: '70px' }}>Blood Type</div>
    </div>
    {donors.map((donor, index) => (
        <DonorCard key={index} person={donor} style={{ marginLeft: 'auto' }} />
      ))}
    </div>
  );
}

export default Donors;