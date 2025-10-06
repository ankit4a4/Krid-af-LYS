import React, { useState } from "react";
import { useGetHeroImageQuery, useUpdateHeroImageMutation } from "../../store/slices/HeroImage";

const ChangeHeroImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const { data, error, isLoading } = useGetHeroImageQuery();
    const [updateHeroImage] = useUpdateHeroImageMutation();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedImage) {
            alert("Please select an image first!");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedImage);

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await updateHeroImage(formData).unwrap();
            console.log("Image updated successfully:", response);
            alert("Hero image updated successfully!");

            setSelectedImage(null);
            setPreview(null);
            e.target.reset();

        } catch (err) {
            console.error("Failed to update image:", err);
            alert("Failed to update hero image: " + (err.data?.message || err.message));
        }
    };

    if (isLoading) return <p>Loading current hero image...</p>;
    if (error) return <p>Error loading hero image: {error.message}</p>;

    return (
        <div
            style={{ backgroundImage: `url(${data?.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="h-screen flex items-center justify-center">
            <div className="w-[100%] max-w-md bg-white p-6 rounded-xl shadow-lg">

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label
                        htmlFor="heroImage"
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition"
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                className="mx-auto max-h-56 object-contain rounded-lg"
                            />
                        ) : (
                            <span className="text-gray-500">Click to select new image</span>
                        )}
                        <input
                            id="heroImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={!selectedImage}
                        className={`py-2 rounded-lg transition font-medium ${selectedImage
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        {selectedImage ? "Save Image" : "Select Image First"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangeHeroImage;