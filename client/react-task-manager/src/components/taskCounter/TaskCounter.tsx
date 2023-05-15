import React, { FC, ReactElement } from 'react';
// MUI components
import { Avatar, Box, Typography } from '@mui/material';
// Styles
import * as Styled from './style';

const TaskCounter: FC = (): ReactElement => {
  return (
    <>
        <Box sx={Styled.taskCounterStyle}>

            <Avatar sx={Styled.avatarStyle}>
                <Typography variant='h4' sx={{ color: "#ffffff"}}>10</Typography>
            </Avatar>

            <Typography variant='h5' sx={Styled.taskCounterSubtitleStyle}>Subtitle</Typography>

        </Box>
    </>
  );
};

export default TaskCounter;