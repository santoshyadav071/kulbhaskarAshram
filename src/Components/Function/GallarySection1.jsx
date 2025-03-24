import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import galleryData from "../../assets/gallaryData.json";

const GallerySection1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(galleryData);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title and Description */}
        <motion.div
          className="flex flex-col text-center w-full mb-20 p-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🏫 Discover Our Campus – Where Learning Meets Innovation!
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "Explore our campus and discover a vibrant environment that fosters
            learning, creativity, and growth. With state-of-the-art facilities
            and a community of passionate individuals, our campus offers the
            perfect setting to shape your future. Join us in experiencing a
            space where opportunities and innovation thrive."
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex relative">
                {/* Gallery Image */}
                <motion.img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Overlay Text */}
                <motion.div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection1;