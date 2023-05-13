import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Typography } from '@mui/material';
// Components
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
// Styles
import * as Styled from './style';

const TaskForm: FC = (): ReactElement => {
  return (
    <Box sx={Styled.taskFormContainer}>
        <Typography component="h2" variant="h6">Create A Task</Typography>
        <TaskTitleField onChange={(e) => console.log(e.target.value)}/>
        <TaskDescriptionField disabled={true}/>
    </Box>
  ); 
};

export default TaskForm;