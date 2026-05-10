import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative flex items-center justify-center min-h-[70vh] overflow-hidden">
            <p className="absolute text-[12rem] font-black text-indigo-50 select-none pointer-events-none">
                404
            </p>
            <div className="relative text-center">
                <p className="text-5xl mb-4">🔍</p>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Page Not Found
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    The page you are looking for doesn&apos;t exist or has been
                    moved.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/tasks"
                        className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                    >
                        View Tasks
                    </Link>
                </div>
            </div>
        </div>
    );
}
