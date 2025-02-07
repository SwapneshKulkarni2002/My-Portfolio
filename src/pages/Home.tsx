import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="heading mb-4">
              Hi, I'm <span className="text-accent">Swapnesh Kulkarni</span>
            </h1>
            <h2 className="subheading mb-6 animate-float">
              Full Stack Developer & MCA Student
            </h2>
            <p className="text-gray-600 mb-8">
              A passionate developer with expertise in web development and
              problem solving. Currently pursuing MCA and building amazing web
              applications.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/SwapneshKulkarni2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/swapnesh-kulkarni-414ab32b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.geeksforgeeks.org/user/kulkarniswapnesh2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200"
            >
              <FaCode size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-accent border border-accent hover:bg-accent hover:text-white"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <motion.img
            src="https://media-hosting.imagekit.io//3a0c135efcba41bb/Profile2.png?Expires=1833546260&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U0xOQgrNf4p7FEzveHHncacthWqr9QS2vBlv7eLZCeslHzB4jPSLVxD619R0PaJBF8B1vH9rmGp3oen69JpTWlsNJMe355N8OShhubxE0gUPfbFLCajB6FliPf19mtF2ixS4DVYvgieCEtgrQSApBx5-Tyx6qdlIrmfDqWMeZVWGeqve4y7TL1J1WBKDX6XeIqH9PI2rTe6d0Iguxnt6qqT~qi3D65vWJWbiT9Nnh1j41IAw~bqH~KsEvRWei~G1~pa6Jp8Zb-uyHpap2VLogyIygyinDcYCZf6AVE8cI73L8w3v4Y0N2X19Ez9IYynKxasge~xOYD~a5PLjamWYRA__"
            alt="Swapnesh Kulkarni"
            className="rounded-full w-96 h-96 mx-auto object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;