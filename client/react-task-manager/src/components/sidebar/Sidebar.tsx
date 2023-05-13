import React, { FC, ReactElement } from 'react';
// MUI components
import { Grid } from '@mui/material';
// Components
import Profile from '../profile/Profile';
import TaskForm from '../taskForm/TaskForm';
// Styles
import * as Styled from './style';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={Styled.sidebarFormStyle}>

      {/* USER PROFILE */}
      <Profile name="Joana" />

      {/* CREATE TASK FORM */}
      <TaskForm />
      
    </Grid>
  );
};

export default Sidebar;
