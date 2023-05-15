import { DisabledProps } from "./DisabledInterface";

export interface DateFieldProps extends DisabledProps {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
}