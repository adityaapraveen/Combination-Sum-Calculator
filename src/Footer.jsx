import React from 'react';
import './Footer.css'; // Import the CSS file

function PersonInfo() {
  const name = "Aditya Praveen"; // Replace with the actual name
  const college = "RV University Bengaluru"; // Replace with the actual college name

  return (
    <div className="person-info">
      <h2>{name}</h2>
      <p>{college}</p>
    </div>
  );
}

export default PersonInfo;
