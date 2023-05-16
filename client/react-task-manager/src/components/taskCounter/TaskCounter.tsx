import React, { FC, ReactElement } from 'react';
// MUI components
import { Avatar, Box, Typography } from '@mui/material';
// Interfaces
import { TaskCounterProps } from './interfaces/TaskCounter';
// Enum
import { Status } from '../taskForm/enums/Status';
// Helpers
import { changeTaskStatusBorderColor } from './helpers/borderColorChange';
// Styles
import * as Styled from './style';

const TaskCounter: FC<TaskCounterProps> = (
  props,
): ReactElement => {
  const { count = 0, taskStatus = Status.completed } =
    props;

  return (
    <>
      <Box sx={Styled.taskCounterStyle}>
        <Avatar sx={{ color: `${changeTaskStatusBorderColor(taskStatus)}`, ...Styled.avatarStyle}}>
          <Typography
            variant="h4"
            sx={{ color: '#ffffff' }}
          >
            {count}
          </Typography>
        </Avatar>

        <Typography
          variant="h5"
          sx={Styled.taskCounterSubtitleStyle}
        >
          {taskStatus}
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
