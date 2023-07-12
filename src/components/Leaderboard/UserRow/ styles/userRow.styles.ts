import styled from 'styled-components';

export const UserRowContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'purple' : 'inherit')};
  color: ${(props) => (props.isSelected ? 'white' : 'inherit')};

  &:hover {
    background-color: purple;
    color: white;
  }
`;
export const UserAvatar = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
