import React, { FC, ReactElement } from 'react';
// MUI components
import { Box } from '@mui/material';
// Components
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
// Interfaces
import { TaskCardProps } from './interfaces/TaskCard';
// Enum
import { Status } from '../taskForm/enums/Status';
import { Priority } from '../taskForm/enums/Priority';
// Helpers
import { changeTaskBorderColorByPriority } from './helpers/borderColorChange';
// Styles
import * as Styled from './style';

const TaskCard: FC<TaskCardProps> = (
  props,
): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Description text',
    priority = Priority.low,
    status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
  } = props;

  return (
    <Box sx={{...Styled.tasksCardContainerStyle, borderColor: `${changeTaskBorderColorByPriority(priority)}`}}>
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
        id={id}
        status={status}
      />
    </Box>
  );
};

export default TaskCard;
