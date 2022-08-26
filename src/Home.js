import * as React from 'react';
import { Button } from '@mui/material';
import './Home.scss';
import PanToolIcon from '@mui/icons-material/PanTool';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import HomeIcon from '@mui/icons-material/Home';

const Home = ({ user, setUser }) => {
  const appStates = {
    INITIAL: 'INITIAL',
    WANT_TO_SMOKE: 'WANT_TO_SMOKE',
    SMOKING: 'SMOKING',
    NOT_SMOKING: 'NOT_SMOKING',
  }
  const [appState, setAppState] = React.useState(appStates.INITIAL)

  const initialClick = () => {
    setAppState(appStates.WANT_TO_SMOKE)
  }

  const finalClick = () => {
    setUser({
      ...user,
      cravingCount: user.cravingCount + 1,
      smokingCount: user.smokingCount + 1
    })
    setAppState(appStates.SMOKING)
  }

  const leaveClick = () => {
    setUser({
      ...user,
      cravingCount: user.cravingCount + 1
    })
    setAppState(appStates.NOT_SMOKING)
  }

  const returnClick = () => {
    setAppState(appStates.INITIAL)
  }

  return (
    <div className="home">
      <span>Hello, {user.name}!</span>
      <br/>

      {appState === appStates.SMOKING &&
        <>
          <span>Okay, you are an adult and you are free to make your own decisions.</span>
          <br/>
        </>
      }

      <span>Today, you wanted to smoke {user.cravingCount} times.</span>
      <span>And you smoked {user.smokingCount} times.</span>

      { appState === appStates.INITIAL &&
        <Button className="button" size="large" variant="contained" startIcon={<PanToolIcon />} onClick={initialClick}>
          I want to smoke
        </Button>
      }

      { appState === appStates.WANT_TO_SMOKE &&
        <>
          <br/>
          <span className="italic"><strong>Fun fact:</strong> Tobacco kills more than 8 million people each year.</span>
          <span className="italic">More than 7 million of those deaths are the result of direct tobacco use while around 1.2 million are the result of non-smokers being exposed to second-hand smoke.</span>
          <br/>
          <span>Do you still want to smoke?</span>
          <Button className="button" size="large" variant="contained" startIcon={<SmokingRoomsIcon />} onClick={finalClick}>
            Yes, I will smoke
          </Button>
          <Button className="button" size="large" variant="contained" startIcon={<SmokeFreeIcon />} onClick={leaveClick}>
            No, I'm good
          </Button>
        </>
      }

      {appState === appStates.NOT_SMOKING &&
        <>
          <br/>
          <span>Great! I'm proud of you.</span>
          <span>You earned 100 points.</span>
          <span>Have a nice day!</span>
        </>
      }

      {(appState === appStates.SMOKING || appState === appStates.NOT_SMOKING) &&
        <Button className="button" size="large" variant="contained" startIcon={<HomeIcon />} onClick={returnClick}>
          Return to main screen
        </Button>
      }
    </div>
  );
}

export default Home;
