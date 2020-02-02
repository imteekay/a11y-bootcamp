import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Menu } from './Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBar = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarUI position="static">
        <Toolbar>
          <Menu classes={classes} />
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBarUI>
    </div>
  );
}
