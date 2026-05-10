export interface Task {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}

export type FilterType = "all" | "pending" | "completed";

export interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export interface TaskFilterProps {
    current: FilterType;
    onChange: (filter: FilterType) => void;
    counts: { all: number; pending: number; completed: number };
}
