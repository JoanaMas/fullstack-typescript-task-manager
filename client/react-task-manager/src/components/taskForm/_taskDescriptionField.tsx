import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
// Interfaces
import { TextFieldProps } from './interfaces/TextField';


// DYNAMIC COMPONENT
const TaskDescriptionField: FC<TextFieldProps> = (
  props,
): ReactElement => {

  // DESTRUCTURING THE PROPS & ASSIGNING DEFAULT VALUES TO THEM
  const { 
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default TaskDescriptionField;
