export default function TasksPage() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">My Tasks</h1>
            <p className="text-sm text-gray-500 mb-6">
                Add, complete, and delete your tasks below.
            </p>

            {/* Add Task Input */}
            <div className="flex gap-2 mb-5">
                <input
                    type="text"
                    placeholder="What do you need to do?"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                    Add
                </button>
            </div>

            {/* Filter Tabs (hardcoded for now) */}
            <div className="flex gap-2 mb-5">
                {["All", "Pending", "Completed"].map((label) => (
                    <button
                        key={label}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium ${
                            label === "All"
                                ? "bg-indigo-600 text-white"
                                : "bg-white border border-gray-300 text-gray-600"
                        }`}
                    >
                        {label}
                        <span className="text-xs px-1.5 py-0.5 rounded-full bg-indigo-500 text-white">
                            0
                        </span>
                    </button>
                ))}
            </div>

            {/* Empty State */}
            <div className="text-center py-16 text-gray-400 text-sm">
                No tasks yet. Add one above!
            </div>
        </div>
    );
}
