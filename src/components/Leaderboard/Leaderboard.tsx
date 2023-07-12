import React, { useState, useEffect, useRef } from 'react';
import UserRow from './UserRow/UserRow';
import { LeaderboardContainer, LoaderContainer } from '../styles/leaderboard.styles';
import { User } from '../../types';

interface LeaderboardProps {
  users: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const leaderboardRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      loadMoreUsers();
    }
  };

  const loadMoreUsers = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        const startIndex = visibleUsers.length;
        const endIndex = startIndex + 50;
        const nextUsers = users.slice(startIndex, endIndex);
        setVisibleUsers((prevUsers) => [...prevUsers, ...nextUsers]);
        setIsLoading(false);
      }, 1000); // имитация задержки при загрузке данных
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    loadMoreUsers();
  }, [users]);

  return (
    <LeaderboardContainer ref={leaderboardRef}>
      {visibleUsers.map((user, index) => (
        <UserRow key={index} user={user} />
      ))}
      {isLoading && (
        <LoaderContainer>
          <div>Loading...</div>
        </LoaderContainer>
      )}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
