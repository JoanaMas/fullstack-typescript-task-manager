import React, { FC, ReactElement } from 'react';
// MUI components
import { Grid, Box, Typography } from '@mui/material';
// Components
import TaskCounter from '../taskCounter/TaskCounter';
import TaskCard from '../taskCard/TaskCard';
import AlertMessage from '../taskForm/_alertMessage';
// Date formatter
import { format } from 'date-fns';
// Interfaces
import { TaskCardProps } from '../taskCard/interfaces/TaskCard';
import { UpdateTaskProps } from '../taskForm/interfaces/UpdateTask';
// Enum
import { Status } from '../taskForm/enums/Status';
// Styles
import * as Styled from './style';
// Axios requests
import { getTasks } from '../../api/axios';
// React Query
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { IndexKind } from 'typescript';
import axios from 'axios';
// Helper functions
import { checkIfAllTasksCompleted } from './helpers/findAllCompletedTasks';
import { taskCounter } from './helpers/tasksCounter';


const TaskArea: FC = (): ReactElement => {

  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: tasks,
  } = useQuery('tasks', getTasks);

  const updateTaskStatusMutation = useMutation(
    (updatedTask: UpdateTaskProps) => {
      return axios.put(
        `http://localhost:4500/tasks`,
        updatedTask,
      );
    },
  );

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskStatusMutation.mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.todo,
    },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('tasks');
        }
      }
    );
  };

  const markTaskAsCompleted = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    updateTaskStatusMutation.mutate({
      id,
      status: Status.completed,
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
      }
    }
    );
  };

  
  // DESTRUCTURIZATION FOR STATUS COUNTERS
  const [todo, inProgress, completed] = taskCounter(tasks);

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
        {isError && (
          <Box sx={Styled.alertMessageContainer}>
            <AlertMessage
              severity="error"
              messageTitle="Error"
              messageText="There was an error fetching your tasks "
            />
          </Box>
        )}

        <Grid
          item
          sx={Styled.CounterGridStyle}
          md={10}
          xs={12}
        >
          <TaskCounter count={todo.length} taskStatus={Status.todo} />
          <TaskCounter
            count={inProgress.length}
            taskStatus={Status.inProgress}
          />
          <TaskCounter
            count={completed.length}
            taskStatus={Status.completed}
          />
        </Grid>

        {/* TASKS */}

        {checkIfAllTasksCompleted(tasks) ? <Typography variant='h5'>No tasks created yet</Typography> : 
        <Grid item sx={Styled.TaskGridStyle} xs={10} md={8}>
          {tasks.map(
            (item: TaskCardProps, index: IndexKind) => {
              if (
                item.status === Status.inProgress ||
                item.status === Status.todo
              ) {
                return (
                  <TaskCard
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    date={new Date(`${item.date}`)}
                    status={item.status}
                    priority={item.priority}
                    onStatusChange={onStatusChangeHandler}
                    onClick={markTaskAsCompleted}
                  />
                );
              }
            },
          )}
        </Grid>
        }
      </Grid>
    </Grid>
  );
};

export default TaskArea;
