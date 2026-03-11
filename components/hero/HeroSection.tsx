"use client";

import React, { useState, useEffect } from "react";
import {
  Crosshair,
  Globe,
  ShieldAlert,
  Terminal,
  ChevronRight,
  Cpu,
  Activity,
  Wifi,
} from "lucide-react";

export default function HeroSection() {
  // Real-time clock for the HUD
  const [time, setTime] = useState<string>("");

  // Mock Coordinates
  const [coords, setCoords] = useState({ lat: "34.0522", long: "-118.2437" });

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toISOString().split("T")[1].split(".")[0] + "Z");
      // Subtle coordinate drift simulation
      setCoords({
        lat: (34.0522 + Math.random() * 0.001).toFixed(4),
        long: (-118.2437 + Math.random() * 0.001).toFixed(4),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#020202] overflow-hidden flex items-center">
      {/* --- LAYER 1: Base Grid & Noise --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none" />

      {/* --- LAYER 2: The Orbital Scanner Visual --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 md:opacity-100">
        {/* The central rotating structure */}
        <div className="relative w-[800px] h-[800px] xl:w-[1200px] xl:h-[1200px]">
          {/* Outer Ring - Slow Rotate */}
          <div className="absolute inset-0 border border-blue-900/30 rounded-full animate-spin-slow dashed-border"></div>

          {/* Middle Ring - Reverse Slower Rotate */}
          <div className="absolute inset-[10%] border border-blue-500/20 rounded-full animate-spin-reverse-slower">
            {/* Decorative Nodes on ring */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#020202] border border-blue-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#020202] border border-blue-500" />
          </div>

          {/* Inner Core - Pulsing */}
          <div className="absolute inset-[30%] bg-blue-900/10 rounded-full animate-pulse-slow border border-blue-500/30 flex items-center justify-center">
            <Globe className="w-32 h-32 text-blue-900/50" strokeWidth={0.5} />
          </div>

          {/* Scanning Beam Effect */}
          <div className="absolute inset-0 animate-scan-vertical opacity-50">
            <div className="w-full h-2 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent shadow-[0_0_30px_rgba(59,130,246,0.8)]"></div>
          </div>

          {/* Random Target Blips */}
          <div className="absolute top-[20%] left-[30%]">
            <TargetBlip label="TGT-A1" color="red" />
          </div>
          <div className="absolute bottom-[25%] right-[35%]">
            <TargetBlip label="ASSET-B4" color="blue" />
          </div>
          <div className="absolute top-[15%] right-[20%]">
            <TargetBlip label="UNKNOWN" color="amber" />
          </div>
        </div>
      </div>

      {/* --- LAYER 3: HUD Overlays (Fixed to viewport corners) --- */}
      {/* Top Left */}
      <div className="absolute top-24 left-6 md:left-10 z-20 pointer-events-none select-none">
        <div className="flex items-center gap-2 text-blue-500 mb-2">
          <Terminal className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-widest">
            System Command
          </span>
        </div>
        <div className="text-xs font-mono text-neutral-400">
          <div>
            STATUS: <span className="text-green-400">ONLINE</span>
          </div>
          <div>LINK: SECURE (AES-256)</div>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute top-24 right-6 md:right-10 z-20 pointer-events-none select-none text-right">
        <div className="flex items-center justify-end gap-2 text-blue-500 mb-2">
          <Wifi className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Telemetry
          </span>
        </div>
        <div className="text-xs font-mono text-neutral-400">
          <div>UTC: {time || "INITIALIZING..."}</div>
          <div className="flex justify-end gap-2">
            LAT: {coords.lat} <span className="text-blue-900">|</span> LNG:{" "}
            {coords.long}
          </div>
        </div>
      </div>

      {/* Bottom Left Indicator */}
      <div className="absolute bottom-10 left-6 md:left-10 z-20 pointer-events-none select-none flex items-end gap-4">
        <Activity className="w-6 h-6 text-blue-500 animate-pulse" />
        <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent mb-3"></div>
      </div>

      {/* --- LAYER 4: Main Content --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 w-full pt-20">
        <div className="max-w-3xl">
          {/* Identifier Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
            <ShieldAlert className="w-4 h-4" />
            Defense-Grade Autonomy
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight drop-shadow-2xl">
            DOMINATE <br />
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              EDGE.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-xl leading-relaxed backdrop-blur-sm p-2 pl-0 rounded">
            We build software-defined hardware for contested environments.
            Deploy advanced AI capabilities to the tactical edge, ensuring
            decision superiority when communications go dark.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]">
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative flex items-center gap-2">
                Initialize Sequence <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <button className="px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all flex items-center gap-3 backdrop-blur-md">
              <Cpu className="w-4 h-4 text-neutral-400" />
              View Platform Specs
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20" />
    </div>
  );
}

// A small helper component for the pulsing target blips on the scanner
const TargetBlip = ({
  label,
  color,
}: {
  label: string;
  color: "red" | "blue" | "amber";
}) => {
  const colorMap = {
    red: {
      bg: "bg-red-500",
      shadow: "shadow-red-500/80",
      text: "text-red-500",
    },
    blue: {
      bg: "bg-blue-500",
      shadow: "shadow-blue-500/80",
      text: "text-blue-500",
    },
    amber: {
      bg: "bg-amber-500",
      shadow: "shadow-amber-500/80",
      text: "text-amber-500",
    },
  };
  const c = colorMap[color];

  return (
    <div className="flex flex-col items-center animate-pulse">
      <div
        className={`w-3 h-3 ${c.bg} rounded-full shadow-[0_0_15px_rgba(0,0,0,1)] ${c.shadow} ring-1 ring-black`}
      />
      {/* Connecting line to label */}
      <div className={`h-8 w-px ${c.bg} opacity-50`}></div>
      <div
        className={`text-[9px] font-mono ${c.text} border border-${color}-500/30 bg-black/80 px-2 py-1 backdrop-blur`}
      >
        [{label}]
      </div>
    </div>
  );
};
