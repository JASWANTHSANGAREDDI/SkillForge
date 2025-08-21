import React from "react";

function ForceCalculator() {
  const mass = 10;
  const acceleration = 2; 
  const force = mass * acceleration; 

  return (
    <div>
      <h1>F = m × a</h1>
      <p>Mass: {mass} kg</p>
      <p>Acceleration: {acceleration} m/s²</p>
      <p>Force: {force} N</p>
    </div>
  );
}

export default ForceCalculator;
