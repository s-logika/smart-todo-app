"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUsers, saveUsers, saveCurrentUser } from "@/utils/localStorage";
import { User } from "@/types";

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    function handleSignup() {
        setError("");
        if (!name || !email || !password || !confirm) {
            setError("All fields are required.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }
        const users = getUsers();
        if (users.find((u) => u.email === email)) {
            setError("An account with this email already exists.");
            return;
        }
        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            email,
            password,
            createdAt: new Date().toISOString(),
        };
        saveUsers([...users, newUser]);
        saveCurrentUser(newUser);
        router.push("/");
    }

    return (
        <div className="bg-white rounded-2xl shadow-md w-full max-w-sm mx-4 px-8 py-10">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">
                Create Account
            </h1>
            <p className="text-sm text-gray-500 text-center mb-8">
                Start organising your tasks today
            </p>

            {error && (
                <p className="text-xs text-red-500 mb-4 text-center">{error}</p>
            )}

            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="logika logeswaran"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>
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
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 6 characters"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>
            <div className="mb-6">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    Confirm Password
                </label>
                <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>

            <button
                onClick={handleSignup}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-indigo-700"
            >
                Create Account
            </button>

            <p className="text-xs text-center text-gray-500 mt-5">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-600 hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
