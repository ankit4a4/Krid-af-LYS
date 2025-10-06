import React from "react";
import { useGetProjectsQuery } from "../../store/slices/projectSlice";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
    const { data: projectsData, error, isLoading } = useGetProjectsQuery();
    const navigate = useNavigate();

    if (error) {
        console.error("Error fetching projects:", error);
        toast.error("Failed to fetch projects. Please try again.");
    }

    return (
        <section className="bg-[#f5e9e1] py-14 md:py-20 relative md:mb-5">
            {/* Loader */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                    <Loader2 className="animate-spin text-white w-12 h-12" />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projectsData?.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/singleportfolio/${project?._id}`)}
                            className="group pb-8 cursor-pointer relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <img
                                src={project?.thumbnail?.imageUrl}
                                alt={`Project ${index + 1}`}
                                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-white text-center text-2xl px-6">{project?.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default PortfolioSection;
