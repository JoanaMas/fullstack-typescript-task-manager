import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
// Interfaces
import { TextFieldProps } from './interfaces/TextFieldInterface';

// DYNAMIC COMPONENT
const TaskTitleField: FC<TextFieldProps> = (
  props,
): ReactElement => {
  
  // DESTRUCTURING THE PROPS & ASSIGNING DEFAULT VALUES TO THEM
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskTitleField;
