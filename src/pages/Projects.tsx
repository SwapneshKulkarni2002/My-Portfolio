import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: 'Social Blogging Website - Scribe',
      description:
        'Created a social blogging platform using Angular with features for creating, editing, and sharing blog posts.',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      githubUrl:
        'https://drive.google.com/drive/folders/1QrDMseV2BMTQz566bVlwSX2q2kqSSdZj?usp=share_link',
      liveUrl: 'https://scribe-d63dd.firebaseapp.com/home',
      images: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
        'https://images.unsplash.com/photo-1542435503-956c469947f6',
      ],
      date: 'Feb 2022',
    },
    {
      title: 'Student Accommodation Website - PG Life',
      description:
        'Built a responsive student accommodation website for finding and booking PG accommodations.',
      technologies: [
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'React',
        'PHP',
        'MySQL',
      ],
      githubUrl:
        'https://drive.google.com/drive/folders/1cWgcYRKlwfQtcf8mjPSGv90s6qH2Pl95?usp=sharing',
      liveUrl: 'http://pglife2002.infinityfreeapp.com/',
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      ],
      date: 'Aug 2021 - Oct 2021',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading mb-12 text-center">My Projects</h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card overflow-hidden"
            >
              <div className="mb-6 aspect-video">
                <Slider {...sliderSettings} className="project-slider">
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative pb-[56.25%]">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <h2 className="subheading mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-200"
                >
                  <FaGithub size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
