import { Router } from 'express';
// Controller
import TasksController from './tasks.controller';
// Task validator
import { taskValidator, updateTaskValidator } from './tasks.validator';

export const tasksRouter: Router = Router();

// Router
tasksRouter.get('/tasks', TasksController.getAllTasks);
tasksRouter.post('/tasks', taskValidator, TasksController.postTask);
tasksRouter.put('/tasks', updateTaskValidator, TasksController.updateTask);