import { Request, Response, Router } from 'express';

export const tasksRouter: Router = Router();

// Default route
tasksRouter.get('/tasks', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});