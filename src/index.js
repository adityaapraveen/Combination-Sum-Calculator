import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CombinationSumCalculator from './combinationSum';
import Loader from './Loader';
import Footer from './Footer';

// import ToggleSwitch from './ToggleSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loader />
    <CombinationSumCalculator />
    {/* <ToggleSwitch /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
