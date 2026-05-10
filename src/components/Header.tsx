"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, clearCurrentUser } from "@/utils/localStorage";
import { User } from "@/types";

export default function Header() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    function handleLogout() {
        clearCurrentUser();
        setUser(null);
        router.push("/");
    }

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-semibold text-gray-800 text-base"
                >
                    Smart Todo
                </Link>
                <nav className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Home
                    </Link>
                    <Link
                        href="/tasks"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Tasks
                    </Link>
                    {user ? (
                        <>
                            <span className="text-sm text-gray-700">
                                Hi, {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
