import React from 'react';
import './App.css';
import { Authenticate } from './components/Authenticate';

function App() {
  const cors = require('cors');
  return (
    <Authenticate />
  );
}

export default App;
