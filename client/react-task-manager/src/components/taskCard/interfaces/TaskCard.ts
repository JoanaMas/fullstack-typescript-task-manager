// Interfaces
import { TaskHeaderProps } from "./taskHeader";
import { TaskDescriptionProps } from "./TaskDescription";
import { TaskFooterProps } from "./TaskFooter";


export interface TaskCardProps
    extends TaskHeaderProps,
    TaskDescriptionProps,
    TaskFooterProps {
        id?: string;
        priority?: string;
        status?: string;
    }