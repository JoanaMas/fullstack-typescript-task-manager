import React, { FC, ReactElement } from 'react';
// MUI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// Interfaces
import { DateFieldProps } from './interfaces/DateField';


// DYNAMIC COMPONENT
const TaskDateField: FC<DateFieldProps> = (props): ReactElement => {

    const { 
      value = new Date(),
      disabled = false,
      onChange = (data) => console.log(data)
    } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
          sx={{ width: "100%"}}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;