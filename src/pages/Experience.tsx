import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading mb-12 text-center">Work Experience</h1>

        <div className="card glass-card p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-accent mb-4">Fresh Graduate</h2>
            <p className="text-gray-600 mb-6">
              I am currently a fresh MCA graduate actively seeking opportunities to start my professional journey in software development.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Ready to Contribute</h3>
              <p className="text-blue-700">
                While I may not have formal work experience yet, I have:
              </p>
              <ul className="text-blue-600 mt-3 space-y-2 text-left list-disc list-inside">
                <li>Strong foundation in full-stack development</li>
                <li>Hands-on experience with personal and academic projects</li>
                <li>Passion for learning new technologies</li>
                <li>Excellent problem-solving skills</li>
                <li>Strong commitment to writing clean, efficient code</li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="btn inline-flex items-center">
                  <FaEnvelope className="mr-2" /> Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;