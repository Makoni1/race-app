import React, { useState } from 'react';
import { User } from '../../../types';
import {
  UserRowContainer,
  UserName,
  UserSpeed,
  UserTime,
} from '../../styles/leaderboard.styles';

import UserHelmet from './UserHelmet';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <UserRowContainer isSelected={isSelected} onClick={handleClick}>
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
