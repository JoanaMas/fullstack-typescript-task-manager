import React, { FC, ReactElement } from 'react';
// MUI components
import {
  Box,
  Switch,
  Button,
  FormControlLabel,
} from '@mui/material';
// Interfaces
import { TaskFooterProps } from './interfaces/TaskFooter';
// Enums
import { Status } from '../taskForm/enums/Status';
// Styles
import * as Styled from './style';

const TaskFooter: FC<TaskFooterProps> = (
  props,
): ReactElement => {
  const { 
    id,
    status,
    onStatusChange,
    onClick
} =
    props;

  return (
    <Box sx={Styled.taskFooterContainer}>
      <FormControlLabel
        control={
        <Switch color="warning"
        onChange={(e) => onStatusChange(e, id)}
        defaultChecked={status === Status.inProgress}
        />}
        label="In Progress"
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
