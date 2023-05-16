import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Chip, Typography } from '@mui/material';
// Interfaces
import { TaskHeaderProps } from './interfaces/taskHeader';
// Date formatter
import { format } from 'date-fns';
// Styles
import * as Styled from './style';

const TaskHeader: FC<TaskHeaderProps> = (props): ReactElement => {

    const { title, dueDate} = props;

  return (
    <Box sx={Styled.taskHeaderContainer}>

        <Box>
            <Typography variant="h5">{title}</Typography>
        </Box>


        <Box>
            <Chip variant='outlined' label={format(dueDate, "PPP")}/>
        </Box>


    </Box>
  );
};

export default TaskHeader;