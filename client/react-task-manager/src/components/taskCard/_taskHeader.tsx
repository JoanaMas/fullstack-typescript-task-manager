import React, { FC, ReactElement } from 'react';
// MUI components
import { Box, Chip, Typography } from '@mui/material';
// Styles
import * as Styled from './style';

const TaskHeader: FC = (): ReactElement => {
  return (
    <Box sx={Styled.taskHeaderContainer}>

        <Box>
            <Typography variant="h5">This is a test title</Typography>
        </Box>


        <Box>
            <Chip variant='outlined' label="16 May, 2023"/>
        </Box>


    </Box>
  );
};

export default TaskHeader;