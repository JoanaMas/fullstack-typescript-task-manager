import React, { FC, ReactElement } from 'react';
// MUI components
import { Grid, Box } from '@mui/material';
// Components
import TaskCounter from '../taskCounter/TaskCounter';
import TaskCard from '../taskCard/TaskCard';
// Date formatter
import { format } from 'date-fns';
// Enum
import { Status } from '../taskForm/enums/Status';
// Styles
import * as Styled from './style';


const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      {/* CURRENT DATE */}
      <Box mb={10} mt={10} px={6}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        {/* COUNTERS */}

        <Grid item sx={Styled.CounterGridStyle} md={10} xs={12}>

          <TaskCounter count={2} taskStatus={Status.todo} />
          <TaskCounter count={10} taskStatus={Status.inProgress} />
          <TaskCounter count={5} taskStatus={Status.completed}/>
          
        </Grid>

        {/* TASKS */}

        <Grid item sx={Styled.TaskGridStyle} xs={10} md={8}>

          <TaskCard />
          <TaskCard />
          <TaskCard />
          
        </Grid>


      </Grid>
    </Grid>
  );
};

export default TaskArea;
