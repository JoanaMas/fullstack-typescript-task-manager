import { Status } from '../../taskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/TaskCounter';

export const changeTaskStatusBorderColor = (
  taskStatus: TaskCounterStatusType,
): string => {
  switch (taskStatus) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
