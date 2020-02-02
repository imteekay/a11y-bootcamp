import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Home } from './Home';
import { SemanticWeb } from './SemanticWeb';
import { Image } from './Image';
import { Form } from './Form';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export const MainContent = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
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
      </Paper>
    </main>
  );
};
