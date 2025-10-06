import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProjectQuery } from '../store/slices/projectSlice';

const SinglePortfolio = () => {
    const { id } = useParams();
    const { data: projectData, error, isLoading } = useGetSingleProjectQuery(id);

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10">Error loading project.</div>;

    const images = projectData?.images || [];

    return (
        <div className="w-full md:mt-40 ">
            <div className="relative w-full h-[50vh] md:h-[70vh] md:mt-28 mt-10">
                <img
                    src={projectData?.thumbnail?.imageUrl || ""}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                        {projectData?.title || "Portfolio"}
                    </h1>
                    <p className="text-gray-200 max-w-xl">
                        {projectData?.description || "This is a description of the portfolio."}
                    </p>
                </div>
            </div>

            {/* Images Grid */}
            <div className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <div key={img.id || index} className="relative group">
                            <div className="absolute top-2 left-2 bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">
                                {index + 1}
                            </div>
                            <img
                                src={img.imageUrl || img.src}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full md:h-[400px] object-cover rounded-lg transform group-hover:scale-103 transition-transform duration-300"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-2">No images available</p>
                )}
            </div>
        </div>
    );
};

export default SinglePortfolio;
