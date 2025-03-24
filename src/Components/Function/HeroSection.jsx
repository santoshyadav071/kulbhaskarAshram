import { Link } from "react-router-dom";


export const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white  animate-bounce">🌟 Explore, Learn & Succeed with KAPG!</h1>
            <p className="mt-4 text-white  font-bold fade-in">
              Welcome to KAPG we are
              committed to nurturing talent, inspiring innovation, and fostering
              an environment where learning thrives. <br /> Whether you are a
              prospective student, a parent, an alumni, or a visitor, our
              website offers a gateway to explore our vibrant campus life, <br /> 
              academic excellence, and community spirit.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 px-6 py-3 bg-white hover:bg-blue-400 text-black font-bold rounded-lg fade-in"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};