import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuUI from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Menu = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = [
    { link: '/', label: 'Home' },
    { link: '/semantic-web', label: 'Semantic Web' },
    { link: '/image', label: 'Image' },
    { link: '/form', label: 'Form' }
  ];

  return (
    <Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <MenuUI
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem onClick={handleClose}>
            <Link to={item.link}>{item.label}</Link>
          </MenuItem>
        ))}
      </MenuUI>
    </Fragment>
  );
}
