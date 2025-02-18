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
      "A full-stack e-commerce website for leather shoes and accessories, developed with ReactJS, SASS, and Strapi, featuring Stripe integration for secure payments and a smooth checkout experience.",
    image: "1.png",
    github: "https://github.com/AbdurRahmanNashith/ShoeStore",
    deployed: "#",
  },
  // {
  //   title: "Project Two",
  //   description: "A brief description of Project Two.",
  //   image: "/path/to/image2.jpg",
  //   github: "https://github.com/username/project-two",
  //   deployed: "https://project-two.com",
  // },
  {
    title: "ICON2K24",
    description:
      "A web application for managing college fest events, built with NextJS and TailwindCSS, enabling student registration and GPay payments, with an admin portal for verifying registrations and managing event details, and automated email confirmations with QR code tickets using Nodemailer..",
    image: "8.png",
    github: "https://github.com/AbdurRahmanNashith/icon2k24",
    deployed: "https://icon2k24.vercel.app/",
  },
  {
    title: "QuizApp",
    description:
      "A simple animated quiz app built with HTML, CSS, and JavaScript, featuring a sleek dark-themed background. Designed for an engaging user experience with smooth animations and interactive elements.",
    image: "3.png",
    github: "https://github.com/AbdurRahmanNashith/Quiz-App",
    deployed: "#",
  },
  {
    title: "Face Check",
    description:
      "A real-time attendance tracking system using Python, OpenCV2, dlib, and Firebase, featuring facial recognition for seamless identification, last attendance time, total days present, and department-wise record updates.",
    image: "7.png",
    github: "https://github.com/AbdurRahmanNashith/FaceCheck",
    deployed: "#",
  },
  {
    title: "Organic Trace",
    description:
      "A DApp for securely storing and retrieving farming details like crops, cultivation methods, and practices, featuring SHA-256 encryption, Metamask integration for authentication, and a QR code system for consumer access to detailed farming information.",
    image: "4.jpeg",
    github: "https://github.com/AbdurRahmanNashith/organicTrace-II",
    deployed: "#",
  },
  {
    title: "Nash Charity",
    description:
      "A simple charity website built with basic HTML and CSS, integrated with Stripe for secure online donations.",
    image: "5.png",
    github: "https://github.com/AbdurRahmanNashith/NashCharity",
    deployed: "https://abdurrahmannashith.github.io/NashCharity/",
  },

];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "ETRENDZ",
    duration: "August 2024 - December 2024",
    description:
      "Developed a web-based inventory management and sales system that handled all transaction processes, including sales, purchases, returns, and warehouse stock details. Led a team of three to develop a web application with NextJS and TailwindCSS, optimizing student registration and payment processes via GPay, increasing event participation by 40%.",
  },
  {
    role: "Full-Stack Developer | Network Engineer",
    company: "SHOE STYLE",
    duration: "September 2023 - March 2024",
    description:
      "Designed and implemented a plan to digitize daily operations, including inventory tracking, sales, and transaction processes across multiple branches. Developed a custom Point-of-Sale (POS) system to streamline in-store and online sales operations, ensuring real-time updates on stock and sales. Set up a site-to-site VPN connection to secure data flow between branches, ensuring information remained protected. Trained and supported staff on new digital systems, improving efficiency and technology adoption by 30%.",
  },
  {
    role: "Web Developer",
    company: "The Sparks Foundation",
    duration: "May 2023 - June 2023",
    description:
      "Developed a full-stack donation website for providing food, education, and medicine to children. Created an interactive user interface using React, HTML, CSS, and SASS with an integrated payment gateway for secure online donations.",
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
          <section className="relative z-10 flex items-center justify-center min-h-screen text-center bg-white dark:bg-black overflow-hidden">
            {/* Gradient Circle 1 */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-400 to-transparent opacity-40 filter blur-3xl animate-subtle-move-up-left"></div>

            {/* Gradient Circle 2 */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500 to-transparent opacity-40 filter blur-3xl animate-subtle-move-up-right"></div>

            {/* Gradient Circle 3 */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-yellow-300 to-transparent opacity-40 filter blur-3xl animate-subtle-move-down-right"></div>

            {/* Hero Text */}
            <div className="relative z-10 space-y-4 bg-transparent">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                Abdur Rahman Nashith C
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
              I am Abdur Rahman, a passionate and driven software developer with a strong foundation in web development, blockchain, and IT infrastructure. With a B.Tech in Information Technology from BS Abdur Rahman Crescent Institute of Science and Technology, Chennai, I have hands-on experience in developing scalable and efficient solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mt-4">
              My journey includes building full-stack web applications, custom POS systems, and DApps on the Ethereum blockchain. I have developed secure inventory and sales management systems, integrated Metamask authentication, and implemented real-time data tracking solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mt-4">
              Skilled in React, Next.js, Node.js, Python, and SQL, I am committed to creating user-friendly, high-performance software that drives innovation. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of technology.



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
