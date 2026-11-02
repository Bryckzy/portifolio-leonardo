
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MobileViewportDockRuntime from './src/components/MobileViewportDockRuntime';
import './src/components/MobileLiquidOptics.css';
import './src/components/MobileMotionAccessibility.css';
import './src/components/MobileVisualViewportDock.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    <MobileViewportDockRuntime />
  </React.StrictMode>
);