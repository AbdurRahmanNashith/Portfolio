import React from "react";

const Resume = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:abdur.nashith7739@gmail.com";
  };

  return (
    <section id="resume" className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          My Resume
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1xbomXCpJ1vs27sEYyRpqtWAc_sACZKSW/view?usp=drivesdk"
            download
            className="inline-block px-6 py-3 bg-gray-500 dark:bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-black dark:hover:bg-gray-400 transition-colors"
          >
            Resume
          </a>
          {/* Mail Button */}
          <button
            onClick={handleMailClick}
            className="inline-block px-6 py-3 bg-gray-500 dark:bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-black dark:hover:bg-gray-400 transition-colors"
          >
            Mail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
