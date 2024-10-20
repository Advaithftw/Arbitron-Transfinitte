import React, { forwardRef, useEffect, useState } from 'react';
import './cta.css';

const CTA = forwardRef((props, ref) => {
  const [ctaData, setCtaData] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch('/ctaData.json')
      .then((response) => response.json())
      .then((data) => setCtaData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const CTATile = ({ title, description }) => {
    const handleButtonClick = () => {
      alert(`Clicked on ${title}`);
    };

    return (
      <div className="cta__tile">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  const ParentTile = ({ parentTitle, children }) => {
    return (
      <div className="cta__parent-tile">
        <h2 className="parent-title">{parentTitle}</h2>
        {children}
      </div>
    );
  };

  return (
    <div className="gpt3__cta section__margin" ref={ref}>
      <h1>Aditya  </h1>
      <h1> Visions</h1>
      <div className="gpt3__cta-content">
        
      </div>
      <div className="cta__container">
        {ctaData.map((cta, index) => (
          <ParentTile parentTitle={cta.parentTitle} key={index}>
            <CTATile title={cta.title} description={cta.description} />
          </ParentTile>
        ))}
      </div>
    </div>
  );
});

export default CTA;
