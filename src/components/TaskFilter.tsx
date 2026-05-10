"use client";

import { FilterType, TaskFilterProps } from "@/types";

export default function TaskFilter({
    current,
    onChange,
    counts,
}: TaskFilterProps) {
    const tabs: { label: string; value: FilterType }[] = [
        { label: "All", value: "all" },
        { label: "Pending", value: "pending" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <div className="flex gap-2">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onChange(tab.value)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        current === tab.value
                            ? "bg-indigo-600 text-white"
                            : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    {tab.label}
                    <span
                        className={`text-xs px-1.5 py-0.5 rounded-full ${
                            current === tab.value
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        {counts[tab.value]}
                    </span>
                </button>
            ))}
        </div>
    );
}
