export default function HomePage() {
    const total = 0;
    const pending = 0;
    const completed = 0;

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    Smart Todo App
                </h1>
                <p className="text-gray-500 mb-8">
                    Stay organised. Stay productive. One task at a time.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/tasks"
                        className="bg-indigo-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-indigo-700"
                    >
                        Manage Tasks ↓
                    </a>
                    <a
                        href="/signup"
                        className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100"
                    >
                        Get Started
                    </a>
                </div>
            </div>

            {/* Stats Cards */}
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

            {/* Feature Cards */}
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
