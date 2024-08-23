import React from "react";
const skills = [
  {
    name: "HTML",
    image: "html5-color.svg",
  },
  {
    name: "CSS",
    image: "css3-color.svg",
  },
  {
    name: "SCSS",
    image: "sass-color.svg",
  },
  {
    name: "Bootstrap",
    image: "bootstrap-color.svg",
  },
  {
    name: "Tailwind CSS",
    image: "tailwindcss-color.svg",
  },
  {
    name: "Javascript",
    image: "javascript-color.svg",
  },
  {
    name: "Typescript",
    image: "typescript-color.svg",
  },
  {
    name: "React",
    image: "react-color.svg",
  },
  {
    name: "Next",
    image: "nextdotjs-color.svg",
  },
  {
    name: "Angular",
    image: "angular-color.svg",
  },
  {
    name: "Express",
    image: "express-color.svg",
  },
  {
    name: "NodeJS",
    image: "nodedotjs-color.svg",
  },
  {
    name: "MongoDB",
    image: "mongodb-color.svg",
  },
  {
    name: "PostgreSQL",
    image: "postgresql-color.svg",
  },
  {
    name: "MySQL",
    image: "mysql-color.svg",
  },
  {
    name: "Postman",
    image: "postman-color.svg",
  },
  {
    name: "Java",
    image: "devicon--java.svg",
  },
  {
    name: "Spring boot",
    image: "springboot-color.svg",
  },
  {
    name: "Hibernate",
    image: "hibernate-color.svg",
  },
  {
    name: "Python",
    image: "python-color.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
