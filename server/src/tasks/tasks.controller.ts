import { Request, Response } from 'express';
import { AppDataSource } from '../../index';
// Task entity
import { Task } from './tasks.entity';
// Object transformer class object --> plain object, or otherway
import {
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
// Validation function
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';

const getAllTasks = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const tasksRepository = AppDataSource.getRepository(Task);

  try {
    const allTasks: Task[] = await tasksRepository.find({
      order: {
        date: 'ASC',
      },
    });

    // Converting Task class object to plain JS object
    const transformedAllTasksObjectFromClass =
      instanceToPlain(allTasks);
    return res
      .status(200)
      .send(transformedAllTasksObjectFromClass);
  } catch (_error) {
    return res
      .status(500)
      .send({ error: 'Internal Server Error' });
  }
};

const postTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  // Validation applied to req from API
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ error: errors.array() });
  }

  // SAVING TASK TO MYSQL

  // 1. New instance of a task
  const newTask = new Task();

  // 2. Adding required properties to the Task object
  newTask.title = req.body.title;
  newTask.date = req.body.date;
  newTask.description = req.body.description;
  newTask.priority = req.body.priority;
  newTask.status = req.body.status;

  // 3. Add new task to database
  try {
    const createdTask =
      AppDataSource.getRepository(Task).save(newTask);
    const transformedCreatedTaskObjectFromClass =
      instanceToPlain(createdTask);
    return res
      .status(201)
      .send(transformedCreatedTaskObjectFromClass);
  } catch (_error) {
    return res
      .status(500)
      .send({ error: 'Internal Server Error' });
  }
};

const updateTask = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ error: errors.array() });
  }

  // Incoming values from request id & status

  // 1. Checking if task exists using ID from request
  let task: Task | null;

  try {
    task = await AppDataSource.getRepository(Task).findOne({
      where: { id: req.body.id },
    });
    console.log(task);
  } catch (_error) {
    return res
      .status(500)
      .send({ error: 'Internal Server Error' });
  }

  // 2. If task is not found sending error to API
  if (!task) {
    return res
      .status(400)
      .send({ error: 'Task was not found' });
  }

  // 3. Update task
  let updatedTask: UpdateResult;

  try {
    updatedTask = await AppDataSource.getRepository(
      Task,
    ).update(
      req.body.id,
      plainToInstance(Task, {
        status: req.body.status,
      }),
    );

    updatedTask = instanceToPlain(updatedTask) as UpdateResult;

    return res.status(200).send(updatedTask);

  } catch (_error) {
    return res
      .status(500)
      .send({ error: 'Internal Server Error' });
  }
};

const TasksController = {
  getAllTasks,
  postTask,
  updateTask,
};

export default TasksController;
