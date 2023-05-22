import { DisabledProps } from "./Disabled";

export interface DateFieldProps extends DisabledProps {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
}