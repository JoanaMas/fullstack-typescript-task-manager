import { SelectChangeEvent } from "@mui/material";
import { DisabledProps } from "./DisabledInterface";

export interface SelectItemsProps {
    value: string;
    label: string;
}

export interface SelectFieldProps extends DisabledProps {
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: SelectItemsProps[];
}