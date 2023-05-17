import { Request, Response } from "express";
import { AppDataSource } from "../../index";
import { Task } from "./tasks.entity";
// Object transformer class object --> plain object
import { instanceToPlain } from "class-transformer";


const getAllTasks = async (req: Request, res: Response): Promise<void> => {

        const tasksRepository = AppDataSource.getRepository(Task);

        try {
            const allTasks: Task[] = await tasksRepository.find({
                order: {
                    date: 'ASC'
                }
            });

            // Converting Task class object to plain JS object
            const transformedAllTasksObjectFromClass = instanceToPlain(allTasks);
            console.log(transformedAllTasksObjectFromClass);
            res.status(200).send(transformedAllTasksObjectFromClass);

        } catch (error) {
            console.log(error);
        }
};


const postTask = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    res.send("ok");
};





const TasksController = {
    getAllTasks,
    postTask,
};

export default TasksController;