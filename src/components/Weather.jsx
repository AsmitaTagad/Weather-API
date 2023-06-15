import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('');

  return (
    <div className="container">
      <div className="subContainer">
        <input type="text" placeholder="Enter City" />
        <button className="btn">{<BsSearch />}</button>
        <div className="result">
          <h1>13°C</h1>
          <h2>Pune</h2>
          <div className="detail">
            <div className="col">
              <p style={{ marginLeft: '1.5rem' }}>20%</p>
              <p>Humidity</p>
            </div>
            <div className="col">
              <div>
                <p>2 km/h</p>
                <p style={{ marginLeft: '0.5rem' }}>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
