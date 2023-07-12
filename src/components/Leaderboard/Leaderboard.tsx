import React, { useState, useEffect, useRef } from 'react';
import UserRow from './UserRow/UserRow';
import {
  LeaderboardContainer,
  LoaderContainer,
} from '../styles/leaderboard.styles';
import { User } from '../../types';

interface LeaderboardProps {
  users: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const batchSize = 50;

  const loadMoreUsers = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        const startIndex = (pageNumber - 1) * batchSize;
        const endIndex = pageNumber * batchSize;
        const nextUsers = users.slice(startIndex, endIndex);
        setVisibleUsers((prevUsers) => [...prevUsers, ...nextUsers]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setIsLoading(false);
      }, 1000); // имитация задержки при загрузке данных
    }
  };

  useEffect(() => {
    const initialUsers = users.slice(0, batchSize);
    setVisibleUsers(initialUsers);
  }, [users]);

  useEffect(() => {
    loadMoreUsers();
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = scrollHeight - (scrollTop + windowHeight);

    if (distanceFromBottom < 100 && !isLoading) {
      loadMoreUsers();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
