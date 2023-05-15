import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Typography, Stack } from '@mui/material';
// Components
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
// Enums
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
// Styles
import * as Styled from './style';


// DYNAMIC COMPONENT
const TaskForm: FC = (): ReactElement => {
  return (
    <Box sx={Styled.taskFormContainer}>
      <Typography component="h2" variant="h6">
        Create A Task
      </Typography>
      <TaskTitleField
        onChange={(e) => console.log(e.target.value)}
      />
      <TaskDescriptionField />
      <TaskDateField />

      <Stack
        direction="row"
        spacing={2}
        sx={{ width: '100%' }}
      >
        {/* STATUS SELECT */}
        <TaskSelectField
          label="Status"
          name="status"
          items={[
            {
              value: Status.todo,
              label: Status.todo.toUpperCase(),
            },
            {
              value: Status.inProgress,
              label: Status.inProgress.toUpperCase(),
            }
          ]}
        />

         {/* PRIORITY SELECT */}
        <TaskSelectField
        label='Priority'
        name='priority'
        items={[
          {
            value: Priority.low,
            label: Priority.low.toUpperCase(),
          },
          {
            value: Priority.normal,
            label: Priority.normal.toUpperCase(),
          },
          {
            value: Priority.high,
            label: Priority.high.toUpperCase(),
          },
        ]}
         />
      </Stack>
    </Box>
  );
};

export default TaskForm;
