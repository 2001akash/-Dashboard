import React from 'react';

function Home() {
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
        <h1>Dashboard</h1>
        <div>
          <h2>State of Health</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Pie Chart for cell-id 5308
            </div>
            <div style={{ width: '45%', background: '#a8a8a8', padding: '10px' }}>
              Pie Chart for cell-id 5329
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
