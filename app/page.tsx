"use client";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Shoestyle",
    description:
      "Shoestyle is a full-featured web application built for showcasing and selling stylish footwear. It is built with React, MongoDB, Redux, Stripe, Express, and Node.js.",
    image: "1.png",
    github: "https://github.com/MohammedFarmaan/React-Ecommerce-Website",
    deployed: "https://project-one.com",
  },
  // {
  //   title: "Project Two",
  //   description: "A brief description of Project Two.",
  //   image: "/path/to/image2.jpg",
  //   github: "https://github.com/username/project-two",
  //   deployed: "https://project-two.com",
  // },
  {
    title: "MyTasks",
    description:
      "A simple React task tracker built using React Hooks, json-server.",
    image: "8.png",
    github: "https://github.com/MohammedFarmaan/react-task-tracker",
    deployed:
      "https://react-task-tracker-ldd9oepex-mohammedfarmaans-projects.vercel.app/",
  },
  {
    title: "Team Talk",
    description:
      "Real time Chat application using Java, Web sockets and Spring Boot",
    image: "3.png",
    github: "https://github.com/MohammedFarmaan/spring-boot-websocket-chat-app",
    deployed: "#",
  },
  {
    title: "Pong Game",
    description:
      "Java implementation of the Pong game using Java Swing and AWT.",
    image: "7.png",
    github: "https://github.com/MohammedFarmaan/Java-pong-game",
    deployed: "#",
  },
  {
    title: "QR Gen",
    description:
      "A simple and responsive web application to generate and save the QR code for ease of sharing information such as links, photos, videos from various sites.",
    image: "4.jpeg",
    github: "https://github.com/MohammedFarmaan/QrGen?tab=readme-ov-file",
    deployed: "https://codepen.io/Farmaan/pen/mdLPZBg",
  },
  {
    title: "Passcode Generator",
    description:
      "A random alphanumeric passcode generator ranging from 8 to 36 Alphanumeric characters which can be easily copied to your clipboard.",
    image: "5.png",
    github: "https://github.com/MohammedFarmaan/Passcode-Generator",
    deployed: "https://codepen.io/Farmaan/pen/gOzMOXN",
  },
  {
    title: "Spotify-Playlist-Automation",
    description:
      "A simple program which saves all songs from my Spotify Anime Hits playlist at the end of each week before they are automatically removed.",
    image: "6.png",
    github: "https://github.com/MohammedFarmaan/Spotify-Playlist-Automation",
    deployed: "#",
  },
];

const experience = [
  {
    role: "Software Developer ",
    company: "Tactii",
    duration: "April 2023 - December 2023",
    description:
      "During my internship at Tactii, I gained practical experience in software development by working on various impactful projects. I developed an Interns Attendance Tracker, which improved time management and accuracy, and created a secure platform for employee requests, enhancing engagement. I also contributed to feature enhancements that boosted user satisfaction and traffic. This role allowed me to strengthen my skills in Java, Spring Boot, MySQL, and full-stack development, while collaborating effectively with my team.",
  },
];
export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <main className="pt-24 bg-white dark:bg-black min-h-screen">
        <div className="flex flex-col items-center justify-center">
          {/* Hero Section */}
          <section className="relative flex items-center justify-center min-h-screen text-center bg-white dark:bg-black overflow-hidden">
            {/* Gradient Circle 1 */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-400 to-transparent opacity-40 filter blur-3xl animate-subtle-move-up-left"></div>

            {/* Gradient Circle 2 */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500 to-transparent opacity-40 filter blur-3xl animate-subtle-move-up-right"></div>

            {/* Gradient Circle 3 */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-yellow-300 to-transparent opacity-40 filter blur-3xl animate-subtle-move-down-right"></div>

            {/* Hero Text */}
            <div className="relative z-10 space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                Mohammed Farmaan
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300">
                Full Stack Developer | Software Engineer | Computer Science
                Student
              </p>
            </div>
          </section>

          <style jsx>{`
            @keyframes subtle-move-up-left {
              100% {
                transform: translateY(-50px) translateX(-100px);
              }
            }
            @keyframes subtle-move-up-right {
              100% {
                transform: translateY(-70px) translateX(80px);
              }
            }
            @keyframes subtle-move-down-right {
              100% {
                transform: translateY(60px) translateX(90px);
              }
            }
            .animate-subtle-move-up-left {
              animation: subtle-move-up-left 8s ease-in-out infinite alternate;
            }
            .animate-subtle-move-up-right {
              animation: subtle-move-up-right 10s ease-in-out infinite alternate;
            }
            .animate-subtle-move-down-right {
              animation: subtle-move-down-right 7s ease-in-out infinite
                alternate;
            }
          `}</style>

          {/* About Section */}
          <section id="about" className="max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              I am Mohammed Farmaan, a passionate and driven software developer
              with a strong foundation in both front-end and back-end
              technologies. With a Master&apos;s degree in Computer Applications
              and hands-on experience in Java, Spring Boot, and full-stack
              development, I specialize in creating innovative and scalable
              solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mt-4">
              My journey includes developing diverse projects, from enhancing
              time management systems to building secure platforms and engaging
              web applications. I thrive in collaborative environments and am
              always eager to tackle new challenges that push the boundaries of
              technology. future.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mt-4">
              Skilled in a range of technologies including React, Next.js,
              Node.js, and various databases, I am dedicated to delivering
              high-quality software that meets user needs and exceeds
              expectations. I am excited about the opportunity to contribute my
              expertise to dynamic teams and continue growing as a developer.
            </p>
          </section>
          {/* Experience Section */}
          <section id="experience" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {exp.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    deployed={project.deployed}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <Skills />
          {/* Resume Section */}
          <Resume />
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
