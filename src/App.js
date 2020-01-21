import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Home } from './components/Home';
import { SemanticWeb } from './components/SemanticWeb';
import { Image } from './components/Image';
import { Aria } from './components/Aria';
import { Form } from './components/Form';

export const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/semantic-web">Semantic Web</Link>
        </li>
        <li>
          <Link to="/image">Image</Link>
        </li>
        <li>
          <Link to="/aria">Aria</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/semantic-web">
        <SemanticWeb />
      </Route>
      <Route path="/image">
        <Image />
      </Route>
      <Route path="/aria">
        <Aria />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
