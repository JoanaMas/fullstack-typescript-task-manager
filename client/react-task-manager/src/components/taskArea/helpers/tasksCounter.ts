// Interfaces 
import { TaskCardProps } from "../../taskCard/interfaces/TaskCard";
// Enum
import { Status } from "../../taskForm/enums/Status";

export const taskCounter = (tasks: TaskCardProps[]) => {
  
    if(tasks && tasks.length > 0) {
      const todoCounter = tasks.filter((task: TaskCardProps) => task.status === Status.todo);
      const inProgressCounter = tasks.filter((task: TaskCardProps) => task.status === Status.inProgress);
      const completedCounter = tasks.filter((task: TaskCardProps) => task.status === Status.completed);
      return [todoCounter, inProgressCounter, completedCounter];
    }
    return [[], [], []];
  };
