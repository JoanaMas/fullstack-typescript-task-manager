import React, { FC, ReactElement, useState } from 'react';
// MUI components
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
// Components
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import AlertMessage from './_alertMessage';
// Enums
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
// Interfaces
import { CreateTaskProps } from '../taskArea/interfaces/CreateTask';
// Styles
import * as Styled from './style';
// React Query
import { useMutation } from 'react-query';
// Axios requests
import axios from 'axios';

// DYNAMIC COMPONENT
const TaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] =
    useState<string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const mutation = useMutation(
    (newTask: CreateTaskProps) => {
      return axios.post(
        'http://localhost:4500/tasks',
        newTask,
      );
    },
  );

  const createTask = () => {

    setOpen(true);

    if (!title || !date || !description) {
      setError(
        'Title, description & date fields can not be empty',
      );
      return;
    }

    setError(null);

    const task: CreateTaskProps = {
      title,
      description,
      date: date ? date.toString() : '',
      status,
      priority,
    };

    mutation.mutate(task);
  };

  return (
    <Box sx={Styled.taskFormContainer}>
      {/* ALERT COMPONENT */}

      <Box sx={{ display: open ? "flex" : "none" , width: "100%"}}>

        {error ? (
          <AlertMessage
            severity="error"
            messageTitle="Error"
            messageText={error}
          />
        ) : (
          <AlertMessage
            severity="success"
            messageTitle="Success"
            messageText="The task has been created successfully"
          />
        )}
      </Box>

      <Typography component="h2" variant="h6">
        Create A Task
      </Typography>
      <TaskTitleField
        onChange={(e) => setTitle(e.target.value)}
      />
      <TaskDescriptionField
        onChange={(e) => setDescription(e.target.value)}
      />
      <TaskDateField
        value={date}
        onChange={(date) => setDate(date)}
      />

      <Stack
        direction="row"
        spacing={2}
        sx={{ width: '100%' }}
      >
        {/* STATUS SELECT */}
        <TaskSelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          items={[
            {
              value: Status.todo,
              label: Status.todo.toUpperCase(),
            },
            {
              value: Status.inProgress,
              label: Status.inProgress.toUpperCase(),
            },
          ]}
        />

        {/* PRIORITY SELECT */}
        <TaskSelectField
          label="Priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          items={[
            {
              value: Priority.low,
              label: Priority.low.toUpperCase(),
            },
            {
              value: Priority.normal,
              label: Priority.normal.toUpperCase(),
            },
            {
              value: Priority.high,
              label: Priority.high.toUpperCase(),
            },
          ]}
        />
      </Stack>

      <Button
        onClick={createTask}
        fullWidth
        variant="contained"
      >
        Create A Task
      </Button>
    </Box>
  );
};

export default TaskForm;
