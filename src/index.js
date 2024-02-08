import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'd176fb06-0f5e-4dba-96f8-66153eea1319',
    clientToken: 'pubccf8483662aa3c626541d4c1db2ad93d',
    site: 'us5.datadoghq.com',
    service: 'hotspot',
    env: 'prod',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});
console.log("Datadog RUM intialized")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
