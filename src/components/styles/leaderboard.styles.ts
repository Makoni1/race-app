import { styled } from '@mui/system';

export const LeaderboardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const UserRowContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: '#F8F8F8',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
}));

export const UserAvatar = styled('div')(({ theme, color }) => ({
  width: 40,
  height: 40,
  marginRight: theme.spacing(2),
  borderRadius: '50%',
  backgroundColor: color,
}));

export const UserName = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const UserSpeed = styled('div')(({ theme }) => ({
  fontSize: 14,
  marginBottom: theme.spacing(0.5),
}));

export const UserTime = styled('div')(({ theme }) => ({
  fontSize: 12,
  color: '#777777',
}));

export const LoaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
});
