import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UserRowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: calc(100% - 48px);
  font-size: 14px;
`;

export const UserAvatar = styled.img`
  margin-right: 16px;
  background-color: transparent;
  width: 40px;
  height: 40px;
`;
