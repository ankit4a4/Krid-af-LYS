import React from "react";
import { useGetHeroImageQuery } from "../../store/slices/HeroImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

const Hero = () => {
  const { data, error, isLoading } = useGetHeroImageQuery();

  if (error) {
    toast.error("Failed to load hero image. Please try again.");
    console.error("Hero Image Error:", error);
  }

  return (
    <section
      id="hero"
      className="relative md:mt-34 mt-14 h-screen flex items-center justify-center overflow-hidden"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
          <Loader2 className="animate-spin text-white w-12 h-12" />
        </div>
      )}

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${data?.imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default Hero;
