import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import classes from '../styles/SideMenu.module.scss';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';

const SideMenu = () => {
  const router = useRouter();
  console.log(router.pathname);
  // prettier-ignore
  const menuItems = [
    { text: 'My Notes',
      icon: <SubjectOutlined color="primary" />,
      path: '/' },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined
       color="primary" />,
      path: '/create',
    },
  ];

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawer }}>
      <Typography
        component='h2'
        textAlign='center'
        variant='h5'
        mt={2}>
        Quick Notes
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => router.push(item.path)}
            className={router.pathname == item.path ? 'active' : null}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
