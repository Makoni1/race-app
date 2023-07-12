import React from 'react';
import Leaderboard from './components/Leaderboard/Leaderboard';
import { User, Color } from './types';

const App: React.FC = () => {
  const users: User[] = [
    { color: Color.RED, name: 'User 1', speed: 10, time: 1000 },
    { color: Color.GREEN, name: 'User 2876866868688', speed: 8, time: 1200 },
    { color: Color.BLUE, name: 'User 3', speed: 12, time: 900 },
  ];

  return (
    <div>
      <h1>Гоночки</h1>
      <Leaderboard users={users} />
    </div>
  );
};

export default App;

