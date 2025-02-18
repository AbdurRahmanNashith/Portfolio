import React, { useEffect, useState } from "react";

const Footer = () => {
  const [userLocalTime, setUserLocalTime] = useState<string>("");
  const [ownerTime, setOwnerTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Get user's local time
      const localDate = new Date();
      setUserLocalTime(
        localDate.toLocaleTimeString("en-US", { timeZoneName: "short" })
      );

      const istOffset = 5.5 * 60;
      const localOffset = localDate.getTimezoneOffset();
      const offsetDiff = istOffset - localOffset;
      const istDate = new Date(localDate.getTime() + offsetDiff * 60 * 1000);
      setOwnerTime(
        istDate.toLocaleTimeString("en-US", { timeZoneName: "short" })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-black dark:text-gray-300 py-4 bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">© {currentYear} Abdur Rahman Nashith</p>

        {/* Time Information */}
        <div className="text-center">
          <p className="text-sm mb-1">My Time (IST): {ownerTime}</p>
          <p className="text-sm">Your Time: {userLocalTime}</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/abdurrahmannashith/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AbdurRahmanNashith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
