import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Chip, Typography } from '@mui/material';
// Interfaces
import { TaskHeaderProps } from './interfaces/TaskHeader';
// Date formatter
import { format, isValid } from 'date-fns';
// Styles
import * as Styled from './style';


const TaskHeader: FC<TaskHeaderProps> = (props): ReactElement => {

  const { title, date = new Date() } = props;

  const formattedDate = date && isValid(date) ? format(date, "PPP"): '';

  return (
    <Box sx={Styled.taskHeaderContainer}>

        <Box>
            <Typography variant="h5">{title}</Typography>
        </Box>


        <Box>
            <Chip variant='outlined' label={formattedDate}/>
        </Box>


    </Box>
  );
};

export default TaskHeader;