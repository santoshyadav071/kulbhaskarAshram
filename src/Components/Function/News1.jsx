import { useState } from "react";
import { motion } from "framer-motion";
import newsData from "../../assets/newsData.json"; 

const LatestNews = () => {
  const news = newsData.news; 

  const [expandedId, setExpandedId] = useState(null);

  const handleReadMore = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">🎓 Kulbhaskar Ashram PG College News – Stay Updated!</h1>
      <marquee>
        <h6 className="text-2xl font-bold text-center mb-8">Latest News - University wins national award - New research lab intigrated -Admission open for 2025-
        Workshop on Ai in class- Sport Week started gest culture started  </h6>
      </marquee>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((newsItem) => (
          <motion.div
            key={newsItem.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{newsItem.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{newsItem.date}</p>
              <p className="text-gray-700 mb-4">{newsItem.description}</p>

              {/* Additional Content (Show only if expanded) */}
              {expandedId === newsItem.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p className="text-gray-700">{newsItem.additionalContent}</p>
                </motion.div>
              )}

              {/* Read More Button */}
              <button
                onClick={() => handleReadMore(newsItem.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
              >
                {expandedId === newsItem.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;