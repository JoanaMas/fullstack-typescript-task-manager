import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Typography } from '@mui/material';
// Interfaces
import { TaskDescriptionProps } from './interfaces/TaskDescription';

const TaskDescription: FC<TaskDescriptionProps> = ({ description }): ReactElement => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;
