// Interfaces
import { TaskHeaderProps } from "./TaskHeader";
import { TaskDescriptionProps } from "./TaskDescription";
import { TaskFooterProps } from "./TaskFooter";


export interface TaskCardProps
    extends TaskHeaderProps,
    TaskDescriptionProps,
    TaskFooterProps {
        priority?: string;
    }