import React from 'react';
import { Feature } from '../../components'; // Import Feature component
import ExcelTable from './ExcelTable'; // Import ExcelTable component
import './features.css'; // Import CSS

// Feature Data
const featuresData = [
  
];

// Features Component
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Tabular Data from Web Scraping
        </h1>
        
      </div>

      <div className="gpt3__features-container">
        {/* Map through featuresData and render Feature components */}
        <div>
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>

        {/* Embed Excel Table */}
        <ExcelTable />
      </div>
    </div>
  );
};

export default Features;
