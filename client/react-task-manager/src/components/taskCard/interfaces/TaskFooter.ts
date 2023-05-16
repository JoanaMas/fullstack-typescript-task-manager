import React from "react";

export interface TaskFooterProps {
    onStatusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};