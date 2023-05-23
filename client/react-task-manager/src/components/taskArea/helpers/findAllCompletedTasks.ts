// Interfaces
import { TaskCardProps } from "../../taskCard/interfaces/TaskCard";
// Enum
import { Status } from "../../taskForm/enums/Status";

  export const checkIfAllTasksCompleted = (tasks: TaskCardProps[]) => {
    if (tasks && tasks.length > 0) {
      return tasks.every(
        (task: TaskCardProps) =>
          task.status === Status.completed,
      );
    }
  };
