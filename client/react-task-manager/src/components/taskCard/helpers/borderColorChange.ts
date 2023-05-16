import { Priority } from "../../taskForm/enums/Priority";

export const changeTaskBorderColorByPriority = (priority: string | undefined) => {
    switch(priority) {
        case Priority.low:
            return "info.light";
        case Priority.normal:
            return "warning.light";
        case Priority.high:
            return "error.light";
        default: 
            return "grey.500";
    }
};