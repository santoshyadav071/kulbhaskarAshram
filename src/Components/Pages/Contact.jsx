import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full border border-gray-100"
      >
        {/* Heading and Paragraph */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Let’s Connect 🤝
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
          </p>
        </div>

        {/* Grid Layout for Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form>
              {/* Name Field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none resize-none"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                  type="button"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>

          {/* Colorful Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366269835936!2d77.2093153150823!3d28.62873998242063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5e2b7f1b0f%3A0x7f7b9b9b9b9b9b9b!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1631012345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;