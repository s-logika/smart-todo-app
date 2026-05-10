"use client";

import { Trash2 } from "lucide-react";
import { TaskItemProps } from "@/types";

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    const date = new Date(task.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="w-4 h-4 accent-indigo-600 cursor-pointer flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
                <p
                    className={`text-sm font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                >
                    {task.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{date}</p>
            </div>
            {task.completed && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                    Done
                </span>
            )}
            <button
                onClick={() => onDelete(task.id)}
                className="text-red-400 hover:text-red-600 ml-1 flex-shrink-0"
                aria-label="Delete task"
            >
                <Trash2 size={16} />
            </button>
        </div>
    );
}
