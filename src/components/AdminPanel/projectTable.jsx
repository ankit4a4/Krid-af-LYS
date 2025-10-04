import React, { useState } from "react";
import { useGetProjectsQuery, useDeleteProjectMutation } from "../../store/slices/projectSlice";
import ProjectPopup from "./ProjectPopup";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

const ProjectTable = () => {
    const { data, error, isLoading } = useGetProjectsQuery();
    const [deleteProject] = useDeleteProjectMutation();

    const [showPopUp, setShowPopUp] = useState(false);
    const [mode, setMode] = useState("add");
    const [portFolioId, setPortFolioId] = useState(null);
    const [deletingId, setDeletingId] = useState(null); // currently deleting project

    // Handlers
    const handleView = (id) => {
        setPortFolioId(id);
        setMode("view");
        setShowPopUp(true);
    };

    const handleEdit = (id) => {
        setPortFolioId(id);
        setMode("edit");
        setShowPopUp(true);
    };

    const handleDeletePopup = async (id) => {
        try {
            setDeletingId(id); // show loader on this project
            await deleteProject(id).unwrap();
            toast.success("Project deleted successfully!");
        } catch (err) {
            console.error("Delete failed:", err);
            toast.error("Failed to delete project. Try again!");
        } finally {
            setDeletingId(null); // stop loader
        }
    };

    // Loading & Error states
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <AiOutlineLoading3Quarters className="text-4xl text-blue-600 animate-spin" />
            </div>
        );
    }

    if (error) {
        toast.error("Error loading projects");
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                Failed to load projects
            </div>
        );
    }

    return (
        <div className="rounded-xl shadow-md p-4 h-screen overflow-y-auto relative">
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => {
                        setShowPopUp(true);
                        setMode("add");
                    }}
                    className="bg-[#1e1e2f] cursor-pointer text-white px-4 py-2 rounded"
                >
                    Add Portfolio
                </button>
            </div>

            {/* Table */}
            <table className="w-full text-left">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="p-3">Image</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="p-4 text-center text-gray-500">
                                No projects added yet
                            </td>
                        </tr>
                    ) : (
                        data?.map((project) => (
                            <tr key={project?._id} className="border-b hover:bg-gray-50 transition">
                                <td className="p-3">
                                    <img
                                        src={project?.thumbnail?.imageUrl}
                                        alt="Project"
                                        className="w-20 h-16 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="p-3 font-medium">{project.title}</td>
                                <td className="p-3 max-w-xs">
                                    <p className="line-clamp-2 overflow-hidden text-ellipsis">
                                        {project?.description}
                                    </p>
                                </td>
                                <td className="p-3 flex gap-2">
                                    <button
                                        onClick={() => handleView(project?._id)}
                                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleEdit(project?._id)}
                                        className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500 text-white"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeletePopup(project?._id)}
                                        className="bg-red-400 px-2 py-1 rounded hover:bg-red-500 text-white flex items-center justify-center gap-1"
                                        disabled={deletingId === project?._id}
                                    >
                                        {deletingId === project?._id ? (
                                            <AiOutlineLoading3Quarters className="animate-spin text-white text-lg" />
                                        ) : (
                                            "Delete"
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Popup */}
            {showPopUp && (
                <ProjectPopup
                    onClose={() => setShowPopUp(false)}
                    mode={mode}
                    portFolioId={portFolioId}
                />
            )}
        </div>
    );
};

export default ProjectTable;
