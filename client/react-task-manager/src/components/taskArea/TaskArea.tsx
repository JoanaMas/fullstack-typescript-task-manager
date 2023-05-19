import React, { FC, ReactElement } from 'react';
// MUI components
import { Grid, Box } from '@mui/material';
// Components
import TaskCounter from '../taskCounter/TaskCounter';
import TaskCard from '../taskCard/TaskCard';
import AlertMessage from '../taskForm/_alertMessage';
// Date formatter
import { format } from 'date-fns';
// Interfaces
import { TaskCardProps } from '../taskCard/interfaces/TaskCard';
// Enum
import { Status } from '../taskForm/enums/Status';
// Styles
import * as Styled from './style';
// Axios requests
import { getTasks } from '../../api/axios';
// React Query
import { useQuery } from 'react-query';
import { IndexKind } from 'typescript';

const TaskArea: FC = (): ReactElement => {
  const {
    isLoading,
    isError,
    data: tasks,
  } = useQuery('tasks', getTasks);

  if (isLoading) return <p>Is loading...</p>;

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

        {/* ALERT MESSAGE */}
        {isError && 
        <Box sx={Styled.alertMessageContainer}>
            <AlertMessage
              severity="error"
              messageTitle="Error"
              messageText="There was an error fetching your tasks "
            />
        </Box>
        }

        <Grid
          item
          sx={Styled.CounterGridStyle}
          md={10}
          xs={12}
        >
          <TaskCounter count={2} taskStatus={Status.todo} />
          <TaskCounter
            count={10}
            taskStatus={Status.inProgress}
          />
          <TaskCounter
            count={5}
            taskStatus={Status.completed}
          />
        </Grid>

        {/* TASKS */}

        <Grid item sx={Styled.TaskGridStyle} xs={10} md={8}>
          {tasks.map((item: TaskCardProps, index: IndexKind) => {
            if(item.status === Status.inProgress || item.status === Status.todo) {
              return  (
                <TaskCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  date={new Date(`${item.date}`)}
                  status={item.status}
                  priority={item.priority}
                />
              );
            }
          }
         )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
