import axios from "axios";
import { CreateTaskProps } from "../components/taskArea/interfaces/CreateTask";

export const tasksApi = axios.create({
    baseURL: "http://localhost:4500",
    headers: {
        'Content-Type': 'application/json',
    }
});


export const getTasks = async () => {
    const response = await tasksApi.get("/tasks");
    return response.data;
};

export const createTask = async (task: CreateTaskProps) => {
    return await tasksApi.post("/tasks", task);
};

// export const updateTask = async (task: CreateTaskProps) => {
//     return await tasksApi.patch(`/tasks/${task.id}`, task);
// };
