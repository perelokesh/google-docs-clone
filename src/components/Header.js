import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Doc from './Doc';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment } from '@material-ui/core';
import AppsIcons from './AppsIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(2, 5),
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[600],
    borderRadius: '0.375rem',
    margin: theme.spacing(5), // mx-5
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(20), // md:mx-20
    },
  },
  input: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize,
    outline: 'none',  
  },
}));


export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const classes = useStyles();
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: 'sticky' ,flexGrow: 1 , zIndex:50, top:0, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <AppBar position="sticky" sx= {{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="none"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="open drawer"
          sx={{ mr: 1}}
          >
            <Doc/>
          </IconButton>
          <Typography
            variant="h6"
            color="primary"
          >
            Docs
          </Typography>
          <div>
          <TextField
        sx=  {{ 
          flexGrow: 1, 
          px: 5, 
          fontSize: '1rem', 
          backgroundColor: 'transparent', 
        }}
        type="text"
        placeholder="Search"
        className={classes.input}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" color="none" />
            </InputAdornment>
          ),
        }}
      />
      </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AppsIcons/>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="none"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
