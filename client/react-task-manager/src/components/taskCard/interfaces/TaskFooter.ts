import React from "react";

export interface TaskFooterProps {
    id: string;
    status?: string;
    onStatusChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
};