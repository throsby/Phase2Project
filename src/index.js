import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import { datadogRum } from '@datadog/browser-rum'

// datadogRum.init({
//   applicationId: 'HotsPot',
//   clientToken: 'pub859f5a4d362390c42f3fc333429577d5',
//   site: 'us5.datadoghq.com',
//   service: 'hotspot',
//   env: 'production',
//   version: '1.0.0',
//   sessionSampleRate: 100,
//   sessionReplaySampleRate: 100,
//   trackResources: true,
//   trackLongTasks: true,
//   trackUserInteractions: true,
// });

// console.log("Datadog RUM intialized")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
