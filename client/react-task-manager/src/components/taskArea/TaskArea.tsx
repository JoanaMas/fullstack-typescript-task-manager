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
import { UpdateTaskProps } from '../taskForm/interfaces/UpdateTask';
// Enum
import { Status } from '../taskForm/enums/Status';
// Styles
import * as Styled from './style';
// Axios requests
import { getTasks } from '../../api/axios';
// React Query
import { useQuery, useMutation } from 'react-query';
import { IndexKind } from 'typescript';
import axios from 'axios';
import id from 'date-fns/esm/locale/id/index.js';

const TaskArea: FC = (): ReactElement => {
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
    });
  };

  const markTaskAsCompleted = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    updateTaskStatusMutation.mutate({
      id,
      status: Status.completed,
    });
  };

  
  // HELPER FUNCTION
  const checkIfAllTasksCompleted = () => {
    if (tasks && tasks.length > 0) {
      return tasks.every(
        (task: TaskCardProps) =>
          task.status === Status.completed,
      );
    }
  };

  // COUNTER FUNCTION
  const taskCounter = () => {
  
    if(tasks && tasks.length > 0) {
      const todoCounter = tasks.filter((task: TaskCardProps) => task.status === Status.todo);
      const inProgressCounter = tasks.filter((task: TaskCardProps) => task.status === Status.inProgress);
      const completedCounter = tasks.filter((task: TaskCardProps) => task.status === Status.completed);
      return [todoCounter, inProgressCounter, completedCounter];
    }
    return [[], [], []];
  };

  // DESTRUCTURIZATION
  const [todo, inProgress, completed] = taskCounter();


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

        {checkIfAllTasksCompleted() ? <Box>No tasks available</Box> : 
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
