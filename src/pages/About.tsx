import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaGamepad,
  FaBook,
  FaMusic,
  FaFileDownload,
  FaJava,
  FaPalette,
  FaLightbulb,
  FaUsers,
  FaPaintBrush,
  FaTv,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiPython,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiAngular,
  SiReact,
  SiMysql,
} from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programmingSkills = [
    { icon: <SiCplusplus className="text-[#00599C]" />, name: 'C++' },
    { icon: <FaJava className="text-[#007396]" />, name: 'Java' },
    { icon: <SiPython className="text-[#3776AB]" />, name: 'Python' },
    { icon: <SiPhp className="text-[#777BB4]" />, name: 'PHP' },
  ];

  const webSkills = [
    { icon: <SiHtml5 className="text-[#E34F26]" />, name: 'HTML' },
    { icon: <SiCss3 className="text-[#1572B6]" />, name: 'CSS' },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
    { icon: <SiBootstrap className="text-[#7952B3]" />, name: 'Bootstrap' },
    { icon: <SiAngular className="text-[#DD0031]" />, name: 'Angular' },
    { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
  ];

  const databaseSkills = [
    { icon: <SiMysql className="text-[#4479A1]" />, name: 'MySQL' },
  ];

  const otherSkills = [
    { icon: <FaBrain className="text-[#FF6B6B]" />, name: 'Problem Solving' },
    { icon: <FaPalette className="text-[#6B66FF]" />, name: 'Creativity' },
    { icon: <FaLightbulb className="text-[#FFD93D]" />, name: 'Innovation' },
    { icon: <FaUsers className="text-[#4CAF50]" />, name: 'Team Work' },
  ];

  const hobbies = [
    { icon: <FaPaintBrush />, name: 'Drawing' },
    { icon: <FaCode />, name: 'Coding' },
    { icon: <FaBook />, name: 'Reading' },
    { icon: <FaTv />, name: 'Watching TV' },
    { icon: <FaMusic />, name: 'Music' },
  ];

  const achievements = [
    {
      title: 'TCS NQT (Cognitive Test)',
      description: 'Scored 74.34% in the Cognitive Test',
      date: 'September 2023',
    },
    {
      title: 'GeeksforGeeks POTD',
      description:
        'Comment solution selected as "Comment of the Day" in Problem of the Day (POTD) and awarded',
      date: 'August 2024',
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/file/d/1gWyfD7b0GURA3YLhWKLUp88P4SYY9lO1/view?usp=sharing';
    link.download = 'Swapnesh_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h1 className="heading mb-8 text-center">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Professional Journey</h2>
              <p className="text-gray-600 mb-4">
                I am a highly motivated and detail-oriented MCA student with a
                strong foundation in web development and programming. My journey
                in technology began during my BCA studies, where I developed a
                deep passion for creating web applications and solving complex
                problems.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Interesting Facts</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Started coding at the age of 16</li>
                  <li>
                    Solved over 200+ programming problems on various platforms
                  </li>
                  <li>Active contributor to open-source projects</li>
                  <li>
                    Passionate about teaching and mentoring junior developers
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Resume</h2>
              <p className="text-gray-600 mb-4">
                Download my resume to learn more about my experience, skills,
                and achievements.
              </p>
              <button
                onClick={handleDownloadResume}
                className="btn flex items-center space-x-2"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </button>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Education</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-gray-600">
                    R.C. Patel Educational Trust's IMRD, Shirpur
                  </p>
                  <p className="text-gray-500">
                    71.29% / 8.62 CGPA - Currently Pursuing
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-gray-600">
                    Zulal Bhilajirao Patil College, Dhule
                  </p>
                  <p className="text-gray-500">85.98% / 9.57 CGPA - 2023</p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <p className="text-gray-600">
                    Dr. P.R. Ghogre Junior College of Science, Dhule
                  </p>
                  <p className="text-gray-500">70.62% - 2020</p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="text-gray-600">
                    Shree Ekaveera Devi Madhyamik Vidyalaya, Dhule
                  </p>
                  <p className="text-gray-500">80.60% - 2018</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-100"
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="font-semibold text-blue-800">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-600 mt-1">
                      {achievement.description}
                    </p>
                    <p className="text-blue-500 text-sm mt-1">
                      {achievement.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Programming Languages</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon text-4xl w-20 h-20">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Web Development</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {webSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon text-4xl w-20 h-20">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Database</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {databaseSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon text-4xl w-20 h-20">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Other Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon text-4xl w-20 h-20">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="subheading mb-4">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon text-4xl w-20 h-20">
                      {hobby.icon}
                    </div>
                    <span className="text-sm text-gray-600">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
