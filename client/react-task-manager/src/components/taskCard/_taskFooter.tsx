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
// Styles
import * as Styled from './style';

const TaskFooter: FC<TaskFooterProps> = (
  props,
): ReactElement => {
  const { 
    onStatusChange,
    onClick
} =
    props;

  return (
    <Box sx={Styled.taskFooterContainer}>
      <FormControlLabel
        control={
        <Switch color="warning"
        onChange={onStatusChange}
        />}
        label="In Progress"
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
