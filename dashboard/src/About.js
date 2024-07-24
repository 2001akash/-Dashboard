import React from 'react';

function About() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', background: '#d8d8d8' }}>
        <h3>Dashboard</h3>
        <ul>
          <li>Cell ID</li>
          <li>5308</li>
          <li>5329</li>
        </ul>
      </nav>
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <div>
          <h1>Cell ID 5329</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Voltage vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Current vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Temperature vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Capacity vs Time
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h1>Cell ID 5308</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Voltage vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Current vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Temperature vs Time
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Capacity vs Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
