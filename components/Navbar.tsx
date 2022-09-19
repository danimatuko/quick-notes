import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

const Navbar = () => {
  return (
    <AppBar
      className='navbar'
      color='secondary'
      sx={{ flexGrow: 1, marginBottom: 250 }}>
      <Toolbar>
        <Typography>{format(new Date(), 'do MMMM Y')}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
