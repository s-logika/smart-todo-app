"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTasks } from "@/utils/localStorage";

export default function HomePage() {
    const [total, setTotal] = useState(0);
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const tasks = getTasks();
        const done = tasks.filter((t) => t.completed).length;
        setTotal(tasks.length);
        setCompleted(done);
        setPending(tasks.length - done);
    }, []);

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    Smart Todo App
                </h1>
                <p className="text-gray-500 mb-8">
                    Stay organised. Stay productive. One task at a time.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/tasks"
                        className="bg-indigo-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-indigo-700"
                    >
                        Manage Tasks ↓
                    </Link>
                    <Link
                        href="/signup"
                        className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-gray-800">{total}</p>
                    <p className="text-sm text-gray-500 mt-1">Total Tasks</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-amber-500">
                        {pending}
                    </p>
                    <p className="text-sm text-amber-500 mt-1">Pending</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-green-500">
                        {completed}
                    </p>
                    <p className="text-sm text-green-500 mt-1">Completed</p>
                </div>
            </div>

            {total > 0 && (
                <div className="mb-8">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-indigo-600 h-2 rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                {[
                    {
                        title: "Add Tasks Quickly",
                        desc: "Type your task and press Enter. It's that simple.",
                    },
                    {
                        title: "Filter with Ease",
                        desc: "Switch between All, Pending, and Completed views instantly.",
                    },
                    {
                        title: "Saved Automatically",
                        desc: "All your tasks are stored in localStorage — no server needed.",
                    },
                    {
                        title: "Fully Responsive",
                        desc: "Works beautifully on desktop, tablet, and mobile.",
                    },
                ].map((f) => (
                    <div
                        key={f.title}
                        className="bg-white border border-gray-200 rounded-xl p-5"
                    >
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">
                            {f.title}
                        </h3>
                        <p className="text-xs text-gray-500">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
