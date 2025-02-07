import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending message...' });

    try {
      // Using EmailJS to send emails
      const result = await emailjs.send(
        'service_ca4u5mr', // Replace with your EmailJS service ID
        'template_jvme96m', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Swapnesh Kulkarni',
          reply_to: formData.email,
        },
        'qqGgy6HTIsY-34g_I' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again or contact directly via email.',
      });
      console.error('Error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading mb-12 text-center">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ x: -50 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card glass-card">
              <h2 className="subheading mb-6">Contact Information</h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="text-accent text-xl" />
                  <a
                    href="mailto:kulkarniswapnesh2002@gmail.com"
                    className="text-gray-600 hover:text-accent"
                  >
                    kulkarniswapnesh2002@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                >
                  <FaPhone className="text-accent text-xl" />
                  <div>
                    <p className="text-gray-600">+91 7887770827</p>
                    <p className="text-gray-600">+91 9405205095</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                >
                  <FaMapMarkerAlt className="text-accent text-xl" />
                  <p className="text-gray-600">
                    "48", Vighnaharata Colony,
                    <br />
                    Opp. G.T. Bapuji Stop,
                    <br />
                    Dhule-424002, Maharashtra
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card glass-card"
            initial={{ x: 50 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="subheading mb-6">Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-md ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-800'
                      : 'bg-blue-50 text-blue-800'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
