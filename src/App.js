import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  const [nav, setNav] = React.useState(0)
  return (
    <div className="App">
      <AppBar className="logo-container" position="static" color="transparent">
      <img src={logo} className="logo" alt="SMOKoes logo" />
      </AppBar>
      <BottomNavigation value={nav} onChange={(_e, newValue) => {
        setNav(newValue);
      }} className="bottom-nav" showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Leaderboard" icon={<LeaderboardIcon />} />
        <BottomNavigationAction label="My Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
