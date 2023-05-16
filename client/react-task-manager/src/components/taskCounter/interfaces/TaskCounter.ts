import { Status } from "../../taskForm/enums/Status";

export type TaskCounterStatusType = Status.todo | Status.inProgress | Status.completed

export interface TaskCounterProps {
    count: number;
    taskStatus: TaskCounterStatusType;
}