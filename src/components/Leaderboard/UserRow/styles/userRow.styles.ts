import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserRowContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'purple' : 'inherit')};
  color: ${(props) => (props.isSelected ? 'white' : 'inherit')};
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-left: 16px;
`;

export const UserSpeed = styled.div`
  margin-left: 16px;
`;

export const UserTime = styled.div`
  margin-left: 16px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
