import * as React from 'react';
import { Button } from '@mui/material';
import './Home.scss';
import PanToolIcon from '@mui/icons-material/PanTool';

const Home = () => {
  return (
    <div className="home">
      <Button className="button" size="large" variant="contained" startIcon={<PanToolIcon />}>
        I wanted to smoke today
      </Button>
    </div>
  );
}

export default Home;
