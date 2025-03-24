import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Information */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4">Kulbhaskar College</h3>
            <p className="text-gray-400">
              A premier institution dedicated to academic excellence,
              innovation, and holistic development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Link to="/about">About Us</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Link to="/courses">Courses</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Link to="/admission">Admission</Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Link to="/contact">Contact Us</Link>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Email: info@4kulbhaskarcollege.com</li>
              <li>Phone: +91 7304063887</li>
              <li>Address: Prayagraj, Uttar Pradesh, India</li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kulbhaskar College. All Rights
            Reserved.[made by santosh yadav ❤️]
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
