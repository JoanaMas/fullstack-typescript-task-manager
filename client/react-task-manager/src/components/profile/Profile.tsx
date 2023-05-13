import React, { FC, ReactElement } from 'react';
// MUI components
import { Avatar, Box, Typography } from '@mui/material';
// Styles
import * as Styled from './style';

const Profile: FC = (): ReactElement => {
  return (
    <Box sx={Styled.profileContainer}>
      <Avatar sx={Styled.avatar}>J</Avatar>
      <Typography variant='h5' sx={{ color: "common.white" }}>Welcome, Joana</Typography>
      <Typography variant='body1'>This is your personal task manager</Typography>
      <Typography variant='body2' sx={{ opacity: '0.3', mt: "20px" }}>Enter required information in the form to create a task</Typography>
    </Box>
  );
};

export default Profile;