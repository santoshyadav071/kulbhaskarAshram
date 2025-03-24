import { motion } from "framer-motion";
import blogs from '../../assets/blogs.json';

// BlogCard Component
const BlogCard = ({ image, category, title, description, fees }) => {
  return (
    <motion.div
      className="p-4 md:w-1/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap">
            <motion.a
              href="#"
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              {fees}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// BlogSection Component
const BlogSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Intro Heading and Welcome Message */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🚀 Explore Our Exciting Courses & Start Your Learning Journey!
          </h2>
          <p className="text-lg text-gray-600">
          Discover a world of opportunities with our diverse range of courses designed to shape your future.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="flex flex-wrap -m-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;