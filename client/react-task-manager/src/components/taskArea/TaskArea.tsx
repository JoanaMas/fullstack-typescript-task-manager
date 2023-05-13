import React, { FC, ReactElement } from 'react';
// MUI components
import { Grid } from '@mui/material';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h2>Content Area</h2>
    </Grid>
  );
};

export default TaskArea;
