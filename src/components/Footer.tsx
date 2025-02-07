import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: kulkarniswapnesh2002@gmail.com</p>
            <p>Phone: +91 7887770827 / +91 9405205095</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>
              "48", Vighnaharata Colony,
              <br />
              Opp. G.T. Bapuji Stop,
              <br />
              Dhule-424002
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/swapnesh-kulkarni-414ab32b2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/SwapneshKulkarni2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:kulkarniswapnesh2002@gmail.com"
                className="hover:text-accent transition-colors duration-200"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Swapnesh Kulkarni. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
