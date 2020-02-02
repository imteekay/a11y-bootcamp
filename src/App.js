import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './components/Home';
import { SemanticWeb } from './components/SemanticWeb';
import { Image } from './components/Image';
import { Form } from './components/Form';
import { AppBar } from './components/AppBar';

export const App = () => (
  <Router>
    <AppBar title="Accessibility Bootcamp" />

    <main>
      <Switch>
        <Route path="/semantic-web">
          <SemanticWeb />
        </Route>
        <Route path="/image">
          <Image />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </Router>
);
