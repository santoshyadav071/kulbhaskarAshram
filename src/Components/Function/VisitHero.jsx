import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VisitHero = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Hero Image with Fade-In Animation */}
      <motion.img
        src="/home.jpg"
        alt="Campus"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          {/* Heading with Slide-Up Animation */}
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Visit Our Campus
          </motion.h1>

          {/* Button with Scale-Up Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/sedual"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisitHero;