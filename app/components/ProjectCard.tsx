import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  github: string;
  deployed: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  deployed,
}: ProjectProps) {
  return (
    <div
      className="relative cursor-pointer bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
      onClick={() => window.open(deployed, "_blank")}
    >
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 dark:text-blue-400 hover:underline"
          onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
