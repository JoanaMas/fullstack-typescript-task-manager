import React from "react";
import { DisabledProps } from "./DisabledInterface";

export interface TextFieldProps extends DisabledProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}