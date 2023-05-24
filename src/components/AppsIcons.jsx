import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ContactsIcon from '@material-ui/icons/Contacts';
import VideocamIcon from '@material-ui/icons/Videocam';
import TranslateIcon from '@material-ui/icons/Translate';
import PublicIcon from '@material-ui/icons/Public';

function AppsIcons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <AppsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu} component="a" href="https://www.google.com">
          <SearchIcon />  
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component="a" href="https://www.youtube.com">
          <YouTubeIcon /> 
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component="a" href="https://contacts.google.com">
          <ContactsIcon /> 
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component="a" href="https://meet.google.com">
          <VideocamIcon /> 
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component="a" href="https://translate.google.com">
          <TranslateIcon /> 
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component="a" href="https://news.google.com">
          <PublicIcon /> 
        </MenuItem>
      </Menu>
    </>
  );
}

export default AppsIcons;
