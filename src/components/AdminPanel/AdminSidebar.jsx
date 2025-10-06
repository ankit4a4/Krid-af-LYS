import React from "react";
import { Image, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[20%] bg-[#1E1E2F] text-white flex flex-col shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center w-full justify-center py-5 border-b border-white/10">
                <img
                    src="/logo2.png"
                    alt="Company Logo"
                    className="h-40 object-contain transition-transform hover:scale-105"
                />
            </div>

            <nav className="flex flex-col mt-6 gap-2 px-4">
                <Link
                    to="/admin"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition group"
                >
                    <Image className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <span className="font-medium">Hero Section Image</span>
                </Link>

                <Link
                    to="/addportfolio"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition group"
                >
                    <FolderKanban className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <span className="font-medium">Portfolio</span>
                </Link>
            </nav>

            {/* Footer */}
            <div className="mt-auto mb-4 px-4 text-xs text-gray-400 text-center">
                © {new Date().getFullYear()} Studio Kal
            </div>
        </aside>
    );
};

export default AdminSidebar;
