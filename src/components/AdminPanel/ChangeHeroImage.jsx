import React, { useState } from "react";

const ChangeHeroImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedImage) {
            alert("Please select an image first!");
            return;
        }

        console.log("Selected Image Data Ready:", selectedImage);

        const formData = new FormData();
        formData.append("heroImage", selectedImage);

        console.log("FormData:", formData.get("heroImage"));
        alert("Image ready for upload ✅");
    };

    return (
        <div className="h-screen  flex items-center">
            <div className="w-[100%]  max-w-md bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                    🖼️ Change Hero Section Image
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* File Input */}
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
                            <span className="text-gray-500">Click to select image</span>
                        )}
                        <input
                            id="heroImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Save Image
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangeHeroImage;
