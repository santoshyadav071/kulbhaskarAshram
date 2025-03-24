import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 }, // Removed the extra 'n'
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const About1 = () => {
  return (
    <section className="about1 min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Principal Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="prin.webp"
                alt="Pr"
                className="w-full h-97 object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Prof. Gitanjali Maurya
                </h2>
                <p className="text-gray-600 mb-4">
                Prof. Gitanjali  Maurya is a dynamic and visionary leader with a strong
                  commitment to academic excellence and innovation.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Email:</span> knpg@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> 1234567890
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> Allahabad
                    (Prayagraj), Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Us Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="bg-white shadow-lg rounded-lg p-8">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-4xl font-bold text-blue-500 mb-6"
              >
                About Us
              </motion.h1>
              <motion.hr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border-2 border-blue-400 w-20 mb-8"
              />
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed mb-6"
              >
                Education is the oldest art through which our culture and
                scientific heritage transfers to the next generation. The
                Teacher-Student relationship is a dignified tradition, and it
                plays an important role in social reform and development. The
                quality of the teacher is to make students understand the
                conceptual knowledge of the subject and to perform their duty
                with full devotion and accountability towards the College.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed mb-6"
              >
                Expansion reflects growth. The College has also grown over the
                years. On the occasion of the completion of its 56 years of
                glorious standing, it is appreciated to acknowledge its strength,
                the members of the faculty of this college, and to see how they
                have evolved from "THEN TO NOW". Each member is a star that
                shines with their persona, research activities, and
                professionalism.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed mb-6"
              >
                We are determined to strengthen, improve, and provide better
                infrastructural facilities and to add certain new UG courses of a
                vocational nature for achieving excellence in teaching, research,
                and outreach programs that would be comparable to global
                standards.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 font-semibold"
              >
                - Prof. Gitanjali Maurya <br />
                Principal
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About1;