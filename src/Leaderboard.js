import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Leaderboard.scss';
import { users } from './data.js';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }}>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const points = (user.cravingCount - user.smokeCount) * 100
              return {
                id: user.id,
                name: user.name,
                points: points,
              }
            }).sort((a, b) => b.points - a.points).map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell align="right">{user.points}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Leaderboard;
