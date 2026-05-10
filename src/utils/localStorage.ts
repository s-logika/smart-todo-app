import { Task, User } from "@/types";

export function getTasks(): Task[] {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("smart_todo_tasks");
    if (!raw) return [];
    return JSON.parse(raw) as Task[];
}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem("smart_todo_tasks", JSON.stringify(tasks));
}

export function getUsers(): User[] {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("smart_todo_users");
    if (!raw) return [];
    return JSON.parse(raw) as User[];
}

export function saveUsers(users: User[]): void {
    localStorage.setItem("smart_todo_users", JSON.stringify(users));
}

export function getCurrentUser(): User | null {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem("smart_todo_user");
    if (!raw) return null;
    return JSON.parse(raw) as User;
}

export function saveCurrentUser(user: User): void {
    localStorage.setItem("smart_todo_user", JSON.stringify(user));
}

export function clearCurrentUser(): void {
    localStorage.removeItem("smart_todo_user");
}
