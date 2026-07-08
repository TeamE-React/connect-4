import React, { useState } from 'react';
import Link from 'next/link';

import { makeStyles } from 'tss-react/mui';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from '@mui/material';

// Material-UIアイコン取得
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

// スタイルを適用する
const useStyles = makeStyles()({
  headerLogo: {
    color: 'inherit',
    margin: '20px',
  },
  headerTitleStyle: {
    justifyContent: 'start',
    color: 'inherit',
    margin: '20px',
  },
  drawerList: {
    width: 200,
    height: '100%',
  },
});

function Header() {
  // Drawerの状態
  const [isOpen, setOpen] = useState(false);

  // CSSを適用する。
  const { classes } = useStyles();

  // Drawerの状態を変更する関数。
  const toggleDrawerNav = () => {
    setOpen(!isOpen);
  };

  const closeDrawerNav = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* 上部のバー */}
      <AppBar position="static" aria-label="Global Navi">
        <Toolbar>
          <IconButton onClick={toggleDrawerNav} aria-label="SideMenu" size="large">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.headerLogo} variant="h5">
            Connect 4
          </Typography>
          <Link href={`/`}>
            <Typography className={classes.headerTitleStyle} variant="h6">
              Home
            </Typography>
          </Link>
          <Link href={`/settingPage`}>
            <Typography className={classes.headerTitleStyle} variant="h6">
              Setting
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {/* サイドメニュー */}
      <Drawer open={isOpen} onClose={closeDrawerNav}>
        <div className={classes.drawerList}>
          <List>
            <ListItem button onClick={closeDrawerNav}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <Link href={`/`}>
                <ListItemText primary={'Home'} />
              </Link>
            </ListItem>
            <ListItem button onClick={closeDrawerNav}>
              <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
              <Link href={`/settingPage`}>
                <ListItemText primary={'Setting'} />
              </Link>
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Header;
