import React from "react";

export default function TopologyRender() {
  return (
    <div className="relative w-full h-64 lg:h-full min-h-[300px] border border-white/5 bg-[#020202] overflow-hidden flex items-center justify-center">
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.8)] animate-scan z-20 pointer-events-none" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* SVG Network Diagram */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection Lines */}
        <path
          d="M 200 150 L 100 80"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-50"
        />
        <path
          d="M 200 150 L 320 100"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-50"
        />
        <path
          d="M 200 150 L 150 250"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-50"
        />
        <path
          d="M 200 150 L 280 230"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-50"
        />
        <path
          d="M 100 80 L 150 40"
          stroke="#22c55e"
          strokeWidth="1"
          className="opacity-30"
        />
        <path
          d="M 320 100 L 360 160"
          stroke="#ef4444"
          strokeWidth="1"
          className="opacity-30 animate-pulse-fast"
        />

        {/* Central Command Node */}
        <circle
          cx="200"
          cy="150"
          r="16"
          fill="#000"
          stroke="#3b82f6"
          strokeWidth="2"
          className="drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        />
        <circle
          cx="200"
          cy="150"
          r="4"
          fill="#3b82f6"
          className="animate-pulse"
        />
        <text
          x="225"
          y="154"
          fill="#64748b"
          fontSize="10"
          fontFamily="monospace"
        >
          CMD-CORE
        </text>

        {/* Swarm Node 1 (Alpha) */}
        <circle
          cx="100"
          cy="80"
          r="8"
          fill="#000"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="80" r="2" fill="#3b82f6" />
        <text x="80" y="65" fill="#64748b" fontSize="8" fontFamily="monospace">
          UAV-A1
        </text>
        <circle
          cx="150"
          cy="40"
          r="6"
          fill="#000"
          stroke="#22c55e"
          strokeWidth="1"
        />
        <text x="160" y="43" fill="#22c55e" fontSize="8" fontFamily="monospace">
          RELAY-OK
        </text>

        {/* Swarm Node 2 (Beta) */}
        <circle
          cx="320"
          cy="100"
          r="8"
          fill="#000"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <circle cx="320" cy="100" r="2" fill="#3b82f6" />
        <text x="335" y="95" fill="#64748b" fontSize="8" fontFamily="monospace">
          UAV-B1
        </text>

        {/* Hostile/Warning Node */}
        <circle
          cx="360"
          cy="160"
          r="6"
          fill="#000"
          stroke="#ef4444"
          strokeWidth="1"
          className="animate-pulse-fast drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        />
        <text
          x="370"
          y="163"
          fill="#ef4444"
          fontSize="8"
          fontFamily="monospace"
        >
          SIG-LOST
        </text>

        {/* Swarm Node 3 & 4 */}
        <circle
          cx="150"
          cy="250"
          r="8"
          fill="#000"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <circle cx="150" cy="250" r="2" fill="#3b82f6" />
        <text
          x="165"
          y="254"
          fill="#64748b"
          fontSize="8"
          fontFamily="monospace"
        >
          UAV-C1
        </text>

        <circle
          cx="280"
          cy="230"
          r="8"
          fill="#000"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <circle cx="280" cy="230" r="2" fill="#3b82f6" />
        <text
          x="295"
          y="234"
          fill="#64748b"
          fontSize="8"
          fontFamily="monospace"
        >
          UAV-C2
        </text>
      </svg>

      {/* Overlay Status UI */}
      <div className="absolute top-4 right-4 text-right z-30">
        <div className="text-[9px] font-mono text-blue-400 mb-1">
          DATA LINK: SECURE
        </div>
        <div className="text-[9px] font-mono text-green-400">
          PACKET LOSS: 0.02%
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-30 bg-black/60 px-2 py-1 border border-white/10 backdrop-blur-sm">
        <div className="text-[10px] font-mono text-neutral-400">
          FIG 1.1 - TOPOLOGY RENDER
        </div>
      </div>
    </div>
  );
}
