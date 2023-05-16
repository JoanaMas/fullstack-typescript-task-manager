import React, { FC, ReactElement } from 'react';
// MUI components
import { Box } from '@mui/material';
// Components
import TaskHeader from './_taskHeader';
// Styles
import * as Styled from './style';

const TaskCard: FC = (): ReactElement => {
  return (
    <Box sx={Styled.tasksCardContainerStyle}>
        <TaskHeader />
    </Box>
  );
};

export default TaskCard;