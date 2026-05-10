"use client";
import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "@/utils/localStorage";
import { Task, FilterType } from "@/types";
import TaskItem from "@/components/TaskItem";
import TaskFilter from "@/components/TaskFilter";

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState<FilterType>("all");

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    function addTask() {
        const title = input.trim();
        if (!title) return;
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        const updated = [newTask, ...tasks];
        setTasks(updated);
        saveTasks(updated);
        setInput("");
    }

    function toggleTask(id: string) {
        const updated = tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t,
        );
        setTasks(updated);
        saveTasks(updated);
    }

    function deleteTask(id: string) {
        const updated = tasks.filter((t) => t.id !== id);
        setTasks(updated);
        saveTasks(updated);
    }

    const counts = {
        all: tasks.length,
        pending: tasks.filter((t) => !t.completed).length,
        completed: tasks.filter((t) => t.completed).length,
    };

    const filtered = tasks.filter((t) => {
        if (filter === "pending") return !t.completed;
        if (filter === "completed") return t.completed;
        return true;
    });

    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">My Tasks</h1>
            <p className="text-sm text-gray-500 mb-6">
                Add, complete, and delete your tasks below.
            </p>

            <div className="flex gap-2 mb-5">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="What do you need to do?"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                    onClick={addTask}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                    Add
                </button>
            </div>

            <div className="mb-5">
                <TaskFilter
                    current={filter}
                    onChange={setFilter}
                    counts={counts}
                />
            </div>

            <div className="flex flex-col gap-2">
                {filtered.length === 0 ? (
                    <div className="text-center py-16 text-gray-400 text-sm">
                        No tasks yet. Add one above!
                    </div>
                ) : (
                    filtered.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
