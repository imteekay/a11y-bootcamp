import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Home } from './components/Home';
import { SemanticHTML } from './components/SemanticHTML';
import { Image } from './components/Image';
import { Aria } from './components/Aria';
import { Form } from './components/Form';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/semantic-html">Semantic HTML</Link>
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
        <Route path="/semantic-html">
          <SemanticHTML />
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
}

export default App;
