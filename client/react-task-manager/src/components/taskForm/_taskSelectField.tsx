import React, { FC, ReactElement } from 'react';
// Interfaces
import { SelectFieldProps } from './interfaces/SelectField';
// MUI components
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

const TaskSelectField: FC<SelectFieldProps> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
        ))}
        Í
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
