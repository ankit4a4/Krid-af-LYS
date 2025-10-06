import React, { useState, useEffect } from "react";
import {
    useGetSingleProjectQuery,
    useAddProjectMutation,
    useUpdateProjectMutation,
} from "../../store/slices/projectSlice";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

const ProjectPopup = ({ mode, project, onClose, portFolioId }) => {
    const [mainImage, setMainImage] = useState(null);
    const [mainPreview, setMainPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    const { data, error, isLoading } = useGetSingleProjectQuery(portFolioId, {
        skip: !portFolioId,
    });

    const [addProject, { isLoading: adding }] = useAddProjectMutation();
    const [updateProject, { isLoading: updating }] = useUpdateProjectMutation();

    const extractImageUrl = (img) => {
        if (!img) return null;
        if (typeof img === "string") return img;
        if (img.url) return img.url;
        if (img.imageUrl) return img.imageUrl;
        const firstValue = Object.values(img).find((v) => typeof v === "string");
        return firstValue || null;
    };

    useEffect(() => {
        const p = data?.project || data || project;

        if ((mode === "edit" || mode === "view") && p) {
            setMainPreview(extractImageUrl(p.mainImage));
            setTitle(p.title || "");
            setDescription(p.description || "");

            const galleryImgs = (p.galleryImages || []).map((img) => extractImageUrl(img));
            setGalleryPreviews(galleryImgs);
            setGalleryImages([]);
            setIsInitialized(true);
        } else if (mode === "add") {
            resetForm();
            setIsInitialized(true);
        }
    }, [data, project, mode]);

    const resetForm = () => {
        setMainImage(null);
        setMainPreview(null);
        setTitle("");
        setDescription("");
        setGalleryImages([]);
        setGalleryPreviews([]);
    };

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMainImage(file);
            setMainPreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            const newPreviews = files.map((file) => URL.createObjectURL(file));
            setGalleryImages((prev) => [...prev, ...files]);
            setGalleryPreviews((prev) => [...prev, ...newPreviews]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mode === "view") return;

        if (!mainPreview || !title || !description) {
            toast.error("Please fill all required fields");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);

        if (mainImage) {
            formData.append("thumbnail", mainImage);
        }

        galleryImages.forEach((img) => {
            formData.append("images", img);
        });

        try {
            if (mode === "add") {
                await addProject(formData).unwrap();
                toast.success("Project added successfully!");
            } else if (mode === "edit") {
                await updateProject({ id: project?.id || data?._id, formData }).unwrap();
                toast.success("Project updated successfully!");
            }
            resetForm();
            onClose();
        } catch (err) {
            console.error("API Error:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };

    if ((mode === "edit" || mode === "view") && !isInitialized) {
        return (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <AiOutlineLoading3Quarters className="text-4xl text-blue-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start sm:items-center z-50 pt-10 sm:pt-0 overflow-y-auto">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-white rounded-xl p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
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

                {(isLoading) ? (
                    <div className="flex justify-center py-10">
                        <AiOutlineLoading3Quarters className="text-4xl text-blue-600 animate-spin" />
                    </div>
                ) : error ? (
                    <p className="text-center py-10 text-red-500">Error loading project 😕</p>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Main Image */}
                        <div>
                            <label className="block font-medium mb-1">Main Image *</label>
                            <div
                                className={`border-2 border-dashed rounded-lg p-3 text-center transition ${mode === "view" ? "cursor-not-allowed" : "cursor-pointer hover:border-blue-500"
                                    }`}
                                onClick={() =>
                                    mode !== "view" && document.getElementById("mainImageInput").click()
                                }
                            >
                                {mainPreview ? (
                                    <img
                                        src={extractImageUrl(mainPreview)}
                                        alt="Main Preview"
                                        className="mx-auto max-h-40 object-contain rounded-lg"
                                    />
                                ) : (mode !== "add" ? <>
                                    <img
                                        src={data?.thumbnail?.imageUrl}
                                        alt="Main Preview"
                                        className="mx-auto max-h-40 object-contain rounded-lg"
                                    />
                                </> : <p className="text-gray-400">Click to select main image</p>)}
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
                            />
                        </div>

                        {/* Gallery */}
                        <div>
                            <label className="block font-medium mb-1">Gallery Images</label>
                            <div className="flex flex-wrap gap-3">
                                {mode !== "add" &&
                                    data?.images?.map((item, i) => (
                                        <img
                                            key={i}
                                            src={item.imageUrl}
                                            alt={`Gallery ${i}`}
                                            className="w-20 h-20 object-cover rounded-lg border"
                                        />
                                    ))}
                                {galleryPreviews.map((img, i) => (
                                    <img
                                        key={i}
                                        src={extractImageUrl(img)}
                                        alt={`Gallery ${i}`}
                                        className="w-20 h-20 object-cover rounded-lg border"
                                    />
                                ))}
                                {mode !== "view" && (
                                    <div
                                        onClick={() => document.getElementById("galleryInput").click()}
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

                        {mode !== "view" && (
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
                                disabled={adding || updating}
                            >
                                {(adding || updating) ? (
                                    <AiOutlineLoading3Quarters className="animate-spin text-white text-lg" />
                                ) : (
                                    mode === "add" ? "Add Project" : "Save Changes"
                                )}
                            </button>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default ProjectPopup;
