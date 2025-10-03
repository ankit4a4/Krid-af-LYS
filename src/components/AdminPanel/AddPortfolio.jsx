import React, { useState } from "react";

const PortfolioAdmin = () => {
    // Sample random projects
    const [projects, setProjects] = useState([
        {
            id: 1,
            mainImage:
                "https://images.unsplash.com/photo-1612831661572-9f2c40e2e134?auto=format&fit=crop&w=500&q=60",
            title: "Project One",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi et leo convallis.",
            galleryImages: [],
        },
        {
            id: 2,
            mainImage:
                "https://images.unsplash.com/photo-1612831455545-9fba13de4522?auto=format&fit=crop&w=500&q=60",
            title: "Project Two",
            description:
                "Quisque fringilla quam at sapien dignissim, sit amet sollicitudin ex convallis.",
            galleryImages: [],
        },
    ]);

    // Popup state
    const [showPopup, setShowPopup] = useState(false);
    const [mode, setMode] = useState("add"); // add | edit | view
    const [currentProject, setCurrentProject] = useState(null);

    // Form states
    const [mainImage, setMainImage] = useState(null);
    const [mainPreview, setMainPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryPreviews, setGalleryPreviews] = useState([]);

    // Reset form
    const resetForm = () => {
        setMainImage(null);
        setMainPreview(null);
        setTitle("");
        setDescription("");
        setGalleryImages([]);
        setGalleryPreviews([]);
    };

    // Open popup
    const handleAddClick = () => {
        setMode("add");
        setCurrentProject(null);
        resetForm();
        setShowPopup(true);
    };

    const handleEditClick = (project) => {
        setMode("edit");
        setCurrentProject(project);
        setMainPreview(project.mainImage);
        setMainImage(null); // user can replace
        setTitle(project.title);
        setDescription(project.description);
        setGalleryImages([]);
        setGalleryPreviews(project.galleryImages || []);
        setShowPopup(true);
    };

    const handleViewClick = (project) => {
        setMode("view");
        setCurrentProject(project);
        setMainPreview(project.mainImage);
        setTitle(project.title);
        setDescription(project.description);
        setGalleryPreviews(project.galleryImages || []);
        setGalleryImages([]);
        setShowPopup(true);
    };

    // Main image change
    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMainImage(file);
            setMainPreview(URL.createObjectURL(file));
        }
    };

    // Gallery change
    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            const newPreviews = files.map((file) => URL.createObjectURL(file));
            setGalleryImages((prev) => [...prev, ...files]);
            setGalleryPreviews((prev) => [...prev, ...newPreviews]);
        }
    };

    // Save project
    const handleSaveProject = (e) => {
        e.preventDefault();
        if (mode === "view") return;

        if (!mainPreview || !title || !description) {
            alert("Please fill all required fields");
            return;
        }

        const newProject = {
            id: mode === "edit" ? currentProject.id : Date.now(),
            mainImage: mainPreview,
            title,
            description,
            galleryImages: galleryPreviews,
        };

        if (mode === "add") {
            setProjects([newProject, ...projects]);
        } else if (mode === "edit") {
            setProjects(
                projects.map((p) => (p.id === newProject.id ? newProject : p))
            );
        }

        setShowPopup(false);
        resetForm();
    };

    return (
        <div className="p-6 bg-gray-100 h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">📁 Portfolio Projects</h2>
                <button
                    onClick={handleAddClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    + Add Project
                </button>
            </div>

            {/* Table */}
            <div className=" bg-white rounded-xl shadow-md">
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
                        {projects.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="p-4 text-center text-gray-500">
                                    No projects added yet
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr
                                    key={project.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">
                                        <img
                                            src={project.mainImage}
                                            alt="Project"
                                            className="w-20 h-16 object-cover rounded-lg"
                                        />
                                    </td>
                                    <td className="p-3 font-medium">{project.title}</td>
                                    <td className="p-3 max-w-xs">
                                        <p className="line-clamp-2 overflow-hidden text-ellipsis">
                                            {project.description}
                                        </p>
                                    </td>
                                    <td className="p-3 flex gap-2">
                                        <button
                                            onClick={() => handleViewClick(project)}
                                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleEditClick(project)}
                                            className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500 text-white"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-start sm:items-center z-50 pt-10 sm:pt-0 overflow-y-auto">
                    <div className="bg-white rounded-xl p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-gray-800 capitalize">
                            {mode === "add"
                                ? "Add New Project"
                                : mode === "edit"
                                    ? "Edit Project"
                                    : "View Project"}
                        </h2>

                        <form className="space-y-4" onSubmit={handleSaveProject}>
                            {/* Main Image */}
                            <div>
                                <label className="block font-medium mb-1">Main Image *</label>
                                <div
                                    className={`border-2 border-dashed rounded-lg p-3 text-center cursor-pointer hover:border-blue-500 transition ${mode === "view" ? "cursor-not-allowed" : ""
                                        }`}
                                    onClick={() =>
                                        mode !== "view" &&
                                        document.getElementById("mainImageInput").click()
                                    }
                                >
                                    {mainPreview ? (
                                        <img
                                            src={mainPreview}
                                            alt="Main Preview"
                                            className="mx-auto max-h-40 object-contain rounded-lg"
                                        />
                                    ) : (
                                        <span className="text-gray-500">
                                            {mode === "view"
                                                ? "No image"
                                                : "Click to select main image"}
                                        </span>
                                    )}
                                </div>
                                <input
                                    id="mainImageInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleMainImageChange}
                                    className="hidden"
                                    disabled={mode === "view"}
                                />
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block font-medium mb-1">Title *</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="Enter project title"
                                    disabled={mode === "view"}
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block font-medium mb-1">Description *</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                    placeholder="Enter project description"
                                    rows={4}
                                    disabled={mode === "view"}
                                ></textarea>
                            </div>

                            {/* Gallery Images */}
                            <div>
                                <label className="block font-medium mb-1">Gallery Images</label>
                                <div className="flex flex-wrap gap-3">
                                    {galleryPreviews.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Gallery ${i}`}
                                            className="w-20 h-20 object-cover rounded-lg border"
                                        />
                                    ))}
                                    {mode !== "view" && (
                                        <div
                                            onClick={() =>
                                                document.getElementById("galleryInput").click()
                                            }
                                            className="w-20 h-20 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer text-gray-400 hover:border-blue-500 hover:text-blue-500"
                                        >
                                            +
                                        </div>
                                    )}
                                </div>
                                <input
                                    id="galleryInput"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleGalleryChange}
                                    className="hidden"
                                    disabled={mode === "view"}
                                />
                            </div>

                            {/* Submit */}
                            {mode !== "view" && (
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                                >
                                    {mode === "add" ? "Add Project" : "Save Changes"}
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioAdmin;
