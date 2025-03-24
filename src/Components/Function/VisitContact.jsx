import { motion } from 'framer-motion';

const VisitContact = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-4">
              Kulbhaskar College, Prayagraj, Uttar Pradesh, India
            </p>
            <p className="text-gray-400 mb-4">Email: info@kulbhaskarcollege.com</p>
            <p className="text-gray-400">Phone: +91 123 456 7890</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.041144835936!2d81.8462143150141!3d25.45898378376922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb1e6f5f3e3d%3A0x4f1c3f3f3f3f3f3f!2sKulbhaskar%20College!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitContact;