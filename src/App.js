import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function SemanticHTML() {
  return <h2>Semantic HTML</h2>;
}

function ImagePage() {
  return <h2>Image</h2>;
}

function Aria() {
  return <h2>Aria</h2>;
}

function Form() {
  return <h2>Form</h2>;
}

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
          <ImagePage />
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
