import React, { FC, ReactElement } from 'react';
// import PropTypes from 'prop-types';
// MUI components
import { Avatar, Box, Typography } from '@mui/material';
// Styles
import * as Styled from './style';



interface ProfileProps {
  name: string,
}



const Profile: FC<ProfileProps> = (props): ReactElement => {

  const { name } = props;

  return (
    <Box sx={Styled.profileContainer}>
      <Avatar sx={Styled.avatar}>{`${name[0].toUpperCase()}`}</Avatar>
      <Typography variant='h5' sx={{ color: "common.white" }}>Welcome, {name}</Typography>
      <Typography variant='body1'>This is your personal task manager</Typography>
      <Typography variant='body2' sx={{ opacity: '0.3', mt: "20px" }}>Enter required information in the form to create a task</Typography>
    </Box>
  );
};

export default Profile;


// USING PROP TYPES - prop types will throw error message in JS if types are not correct
// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
// };