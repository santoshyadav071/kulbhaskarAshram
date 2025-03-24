import { motion } from "framer-motion";

const CampusHighlite = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Har child ko 0.3 seconds ke gap mein animate karega
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="container mx-auto px-6 py-12"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Campus Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Highlight 1 */}
        <motion.div variants={fadeInUp} className="text-center">
          <motion.img
            src="/laibra.webp"
            alt="Library"
            className="w-full h-48 object-cover rounded-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            State-of-the-Art Library
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A modern library with a vast collection of books and digital resources.
          </motion.p>
        </motion.div>

        {/* Highlight 2 */}
        <motion.div variants={fadeInUp} className="text-center">
          <motion.img
            src="/play.webp"
            alt="Sports Complex"
            className="w-full h-48 object-cover rounded-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sports Complex
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            World-class sports facilities for students to excel in athletics.
          </motion.p>
        </motion.div>

        {/* Highlight 3 */}
        <motion.div variants={fadeInUp} className="text-center">
          <motion.img
            src="/cantain.webp"
            alt="Cafeteria"
            className="w-full h-48 object-cover rounded-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cafeteria
          </motion.h3>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A vibrant space for students to relax and enjoy delicious meals.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CampusHighlite;