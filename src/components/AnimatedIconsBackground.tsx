import React from "react";

const icons = [
  // Code (</>)
  (
    <svg key="code" className="icon-anim absolute text-blue-400 dark:text-blue-700" width="48" height="48" fill="none" viewBox="0 0 48 48">
      <text x="8" y="36" fontSize="32" fontFamily="monospace" fontWeight="bold" fill="currentColor">&lt;/&gt;</text>
    </svg>
  ),
  // Gear
  (
    <svg key="gear" className="icon-anim absolute text-purple-400 dark:text-purple-700" width="48" height="48" fill="none" viewBox="0 0 48 48">
      <g stroke="currentColor" strokeWidth="3" fill="none">
        <circle cx="24" cy="24" r="8" />
        <path d="M24 4v8M24 36v8M44 24h-8M12 24H4M36.97 11.03l-5.66 5.66M11.03 36.97l5.66-5.66M36.97 36.97l-5.66-5.66M11.03 11.03l5.66 5.66" />
      </g>
    </svg>
  ),
  // Cloud
  (
    <svg key="cloud" className="icon-anim absolute text-cyan-400 dark:text-cyan-700" width="48" height="48" fill="none" viewBox="0 0 48 48">
      <path d="M16 36h16a8 8 0 0 0 0-16 12 12 0 0 0-24 2" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  ),
  // Terminal
  (
    <svg key="terminal" className="icon-anim absolute text-green-400 dark:text-green-700" width="48" height="48" fill="none" viewBox="0 0 48 48">
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
      <polyline points="14,22 20,28 14,34" stroke="currentColor" strokeWidth="3" fill="none" />
      <line x1="24" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="3" />
    </svg>
  ),
  // Database
  (
    <svg key="db" className="icon-anim absolute text-pink-400 dark:text-pink-700" width="48" height="48" fill="none" viewBox="0 0 48 48">
      <ellipse cx="24" cy="12" rx="16" ry="6" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M8 24c0 3.3 7.2 6 16 6s16-2.7 16-6" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  ),
];

const positions = [
  { top: "10%", left: "8%", anim: "float1" },
  { top: "20%", right: "10%", anim: "float2" },
  { top: "60%", left: "15%", anim: "float3" },
  { bottom: "18%", right: "12%", anim: "float4" },
  { top: "50%", left: "50%", anim: "float5" },
];

const AnimatedIconsBackground = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
  >
    {icons.map((icon, i) => (
      <div
        key={i}
        className={`icon-bg-${i} animate-${positions[i].anim}`}
        style={{
          position: "absolute",
          ...positions[i],
          width: "48px",
          height: "48px",
          opacity: 0.13,
        }}
      >
        {icon}
      </div>
    ))}
  </div>
);

export default AnimatedIconsBackground; 