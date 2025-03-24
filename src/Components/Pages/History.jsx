import { motion } from "framer-motion";

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
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

// Icons for Timeline Events
const timelineIcons = {
  1930: "🏛️", // Establishment
  1940: "🏠", // Hostel Inauguration
  1960: "🎓", // Affiliation
  1965: "🏗️", // Building Completion
  1970: "🔬", // Science Faculty
  1992: "💻", // Computer Center
};

const History = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <motion.header
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-blue-900">
          Kulbhaskar Ashram PG College, Prayagraj
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Established: July 27, 1930 | Under the aegis of Kayastha Pathshala Trust
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Introduction */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700">
            Kulbhaskar Ashram is named after the great philanthropist Munshi Kali Prasad "Kulbhaskar." It was established on July 27, 1930, by the late Babu Brij Bihari Sahay in a small hut. The college is located in the heart of the city and is run under the guidance of one of the leading educational trusts in the country, the Kayastha Pathshala Trust.
          </p>
        </motion.section>

        {/* Timeline Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Key Events
          </h2>
          <div className="space-y-4">
            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1930]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  Kulbhaskar Ashram was established by the late Babu Brij Bihari Sahay.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1940]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  Dr. Rajendra Prasad (India's first President) inaugurated a makeshift hostel.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1960]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  Agra University granted affiliation to the Ashram to provide education at the first-degree level in the Faculty of Agriculture.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1965]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  The main building was completed. The then Prime Minister Lal Bahadur Shastri laid the foundation stone of the Rajendra Prasad Hostel.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1970]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  The Faculty of Science was added, and education in B.Sc. (Bio) and B.Sc. (Maths) was introduced.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item */}
            <motion.div
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{timelineIcons[1992]}</span>
              </div>
              <div>
                <p className="text-gray-700">
                  A Computer Center was established, and computer education began to be offered.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Recognized by UGC (University Grants Commission).</li>
            <li>Affiliated with Chhatrapati Shahu Ji Maharaj University.</li>
            <li>World-class infrastructure facilities available.</li>
            <li>Offers 100% scholarships to eligible students.</li>
          </ul>
        </motion.section>

        {/* Campus Life Section */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Campus Life
          </h2>
          <p className="text-gray-700">
            Campus life at Kulbhaskar Ashram PG College is amazing. It offers numerous extracurricular activities such as dance, singing, art, literature, anchoring, event management, modeling, and drama. The campus has all the necessary facilities to meet students' needs, including medical assistance, food, and departmental stores.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default History;