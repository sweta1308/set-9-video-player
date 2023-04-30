import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { VideoProvider } from './contexts/VideoContext';
import { LikeProvier } from './contexts/LikeContext';
import { LaterProvier } from './contexts/WatchLAterContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <LikeProvier>
          <LaterProvier>
          <App />
          </LaterProvier>
        </LikeProvier>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

