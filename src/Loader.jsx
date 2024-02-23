import React, { useState, useEffect } from 'react';
import './Loader.css'; // Make sure to import the CSS file

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after the initial render
    setLoading(false);
  }, []);

  return (
    loading && (
      <div className="loader">
        <div className="loader-inner">
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
          <div className="loader-block"></div>
        </div>
      </div>
    )
  );
}

export default Loader;
