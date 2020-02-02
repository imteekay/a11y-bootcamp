import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { AppBar } from './components/AppBar';
import { MainContent } from './components/MainContent';

export const App = () => (
  <Router>
    <AppBar title="Accessibility Bootcamp" />
    <MainContent />
  </Router>
);
