import React, { useState } from 'react';
import { User } from '../../../types';
import {
  UserName,
  UserSpeed,
  UserTime,
 
} from '../../styles/leaderboard.styles';

import UserHelmet from './UserHelmet';
import { UserRowContainer } from './styles/userRow.styles';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <UserRowContainer
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      <UserHelmet color={user.color} />
      <div>
        <UserName>{user.name}</UserName>
        <UserSpeed>Speed: {user.speed}</UserSpeed>
        <UserTime>Time: {user.time}</UserTime>
      </div>
    </UserRowContainer>
  );
};

export default UserRow;
