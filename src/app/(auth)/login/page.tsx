"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUsers, saveCurrentUser } from "@/utils/localStorage";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin() {
        setError("");
        const users = getUsers();
        const user = users.find(
            (u) => u.email === email && u.password === password,
        );
        if (!user) {
            setError("Invalid email or password.");
            return;
        }
        saveCurrentUser(user);
        router.push("/");
    }

    return (
        <div className="bg-white rounded-2xl shadow-md w-full max-w-sm mx-4 px-8 py-10">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">
                Welcome Back
            </h1>
            <p className="text-sm text-gray-500 text-center mb-8">
                Sign in to your Smart Todo account
            </p>

            {error && (
                <p className="text-xs text-red-500 mb-4 text-center">{error}</p>
            )}

            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="logika@example.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>
            <div className="mb-6">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>

            <button
                onClick={handleLogin}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-indigo-700"
            >
                Sign In
            </button>

            <p className="text-xs text-center text-gray-500 mt-5">
                Don&apos;t have an account?{" "}
                <Link
                    href="/signup"
                    className="text-indigo-600 hover:underline"
                >
                    Create one
                </Link>
            </p>
        </div>
    );
}
