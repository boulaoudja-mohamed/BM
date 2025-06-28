import React from "react";

const AnimatedBackground = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 w-full h-full animate-gradient-move bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900 opacity-80" />
    {/* Blurred blobs for extra effect */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/30 dark:bg-pink-700/20 rounded-full blur-3xl animate-blob1" />
    <div className="absolute top-2/3 left-2/3 w-96 h-96 bg-blue-400/30 dark:bg-blue-700/20 rounded-full blur-3xl animate-blob2" />
    <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-3xl animate-blob3" />
  </div>
);

export default AnimatedBackground; 