import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';
import logo from './logo.svg';
import Home from './Home';
import Leaderboard from './Leaderboard';
import { userId, users as rawUsers } from './data.js';
import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#27AE60',
    },
    secondary: {
      main: '#DAF7A6',
    },
  },
});

const calculatePoints = user => (user.cravingCount - user.smokingCount) * 100

const App = () => {
  const [nav, setNav] = React.useState(0)
  const [users, setUsers] = React.useState(rawUsers.map((user) => {
    return {
      ...user,
      points: calculatePoints(user),
    }
  }))
  const [currentUser, setCurrentUser] = React.useState(users?.find(user => user.id === userId))

  React.useEffect(() => {
    setUsers(prevState => {
      return prevState.map(user =>
        user.id === userId
          ? {...currentUser, points: calculatePoints(currentUser)}
          : user)
    })
  }, [currentUser]);

  const renderComponent = () => {
    switch (nav) {
      case 1:
        return <Leaderboard users={users} />;
      case 2:
        return <Leaderboard users={users} />;
      case 0:
      default:
        return <Home user={currentUser} setUser={setCurrentUser} />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar className="logo-container" position="static" color="transparent">
          <img src={logo} className="logo" alt="SMOKoes logo" />
          <h1>SMOKoes</h1>
        </AppBar>
        <Container maxWidth="sm">
          <div className="main-container">{renderComponent()}</div>
        </Container>
        <BottomNavigation value={nav} onChange={(_e, newValue) => {
          setNav(newValue);
        }} className="bottom-nav" showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Leaderboard" icon={<LeaderboardIcon />} />
          <BottomNavigationAction label="My Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
}

export default App;
