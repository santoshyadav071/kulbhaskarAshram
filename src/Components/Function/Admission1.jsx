import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Admission1 = () => {
  // Categories and Icons
  const categories = [
    {
      id: 1,
      title: "Online Admission",
      icon: "📄", // Icon for Online Admission
      description:
        "Experience a seamless online admission process designed for your convenience. Apply anytime, anywhere, with just a few clicks.",
      link: "/onlineform",
      linkText: "Apply Now",
    },
    {
      id: 2,
      title: "Visit Campus",
      icon: "🏫", // Icon for Visit Campus
      description:
        "Experience a hassle-free campus visit, designed to give you a glimpse into your future. Explore our facilities and meet faculty.",
      link: "/visitcampus",
      linkText: "Visit Campus",
    },
    {
      id: 3,
      title: "Generate Library Card",
      icon: "📚", // Icon for Library Card
      description:
        "Experience a quick and easy process to generate your library card online. Access a world of knowledge with just a few clicks.",
      link: "/librarycard",
      linkText: "Generate Now",
    },
  ];

  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Welcome Heading with Animation */}
        <motion.div
          className="text-center mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            💼 Unlock Your Future with Our Admission Process!
          </motion.h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our admission options and take the first step towards a
            brighter future.
          </p>
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Explore More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </motion.button>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="flex flex-wrap -m-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: category.id * 0.2 }}
            >
              <div className="h-full text-center">
                {/* Icon */}
                <div className="text-6xl mb-4">{category.icon}</div>
                <p className="leading-relaxed">
                  {category.description}
                  <Link
                    to={category.link}
                    className="text-indigo-900 font-bold underline"
                  >
                    {" "}
                    {category.linkText}
                  </Link>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <p className="text-gray-900 font-bold">{category.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Admission1;