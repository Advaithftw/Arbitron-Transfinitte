import React from 'react';
import './possibility.css';
import vijaylogo from '../../assets/vijaysalesimage.png';
import adityalogo from '../../assets/adityavisionimage2.png';
import reliancelogo from '../../assets/reliancelogo2.png';
import bajajlogo from '../../assets/Bajajlogo.png';

import vijaySalesData from '../../VijaySalesoutputjson.json'; 
import relianceDigitalData from '../../Reliance.json'; 
import adityaVisionData from '../../AdityaVisionOutputJson.json'; 
import bajajElectronicsData from '../../BajajReportOutputJson.json';

const competitorsData = [
  {
    name: 'Vijay Sales',
    imgUrl: vijaylogo,
    jsonData: vijaySalesData
  },
  {
    name: 'Reliance Digital',
    imgUrl: reliancelogo,
    jsonData: relianceDigitalData
  },
  {
    name: 'Aditya Vision',
    imgUrl: adityalogo,
    jsonData: adityaVisionData
  },
  {
    name: 'Bajaj Electronics',
    imgUrl: bajajlogo,
    jsonData: bajajElectronicsData
  }
];

const CompetitorTile = ({ name, imgUrl, jsonData, ctaRef }) => {
  const handleButtonClick = () => {
    if (name === 'Aditya Vision') {
      // Scroll to the CTA component when Aditya Vision is clicked
      if (ctaRef.current) {
        ctaRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log(jsonData);
      alert(`Opened data for ${name}: ${JSON.stringify(jsonData, null, 2)}`);
    }
  };

  return (
    <div className="competitor__tile">
      <img src={imgUrl} alt={name} className="competitor__tile-image" />
      <h3>{name}</h3>
      <button onClick={handleButtonClick}>Open JSON</button>
    </div>
  );
};

const Possibility = ({ ctaRef }) => {
  return (
    <div className="gpt3__whatgpt section__margin" id="wgpt3">
      <div className="gpt3__possibility section__padding" id='possibility'>
        <div className="gpt3__possibility-heading">
          <h1 className="font">The Competitors of Croma</h1>
          <p className="font">Here are some of the leading competitors in the electronics market.</p>
        </div>
        <div className="competitors__container">
          {competitorsData.map((competitor, index) => (
            <CompetitorTile 
              key={index} 
              name={competitor.name} 
              imgUrl={competitor.imgUrl} 
              jsonData={competitor.jsonData} 
              ctaRef={ctaRef} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Possibility;
