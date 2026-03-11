"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Eye,
  Bot,
  Network,
  ChevronRight,
  Activity,
  Terminal,
} from "lucide-react";

// --- Types ---
type TrackItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  colSpan: string;
};

// --- Data ---
const tracks: TrackItem[] = [
  {
    id: "DOM-01 // NAV",
    title: "Autonomous Navigation",
    description:
      "Developing self-governing agents capable of traversing unstructured, contested environments without human intervention.",
    icon: <Bot className="w-6 h-6" />,
    tags: ["SLAM", "PATH_PLANNING", "ROS_2", "SENSOR_FUSION"],
    colSpan: "md:col-span-2",
  },
  {
    id: "DOM-02 // VIS",
    title: "Computer Vision",
    description:
      "Enabling machines to interpret and understand the visual world using hardened deep learning architectures.",
    icon: <Eye className="w-6 h-6" />,
    tags: ["OBJ_DETECT", "SEGMENTATION", "YOLO", "OPENCV"],
    colSpan: "md:col-span-1",
  },
  {
    id: "DOM-03 // HW",
    title: "Embedded Systems",
    description:
      "The nervous system of robotics. High-performance PCB design and real-time, low-latency firmware optimization.",
    icon: <Cpu className="w-6 h-6" />,
    tags: ["STM32", "ALTIUM", "RTOS", "FIRMWARE"],
    colSpan: "md:col-span-1",
  },
  {
    id: "DOM-04 // SWM",
    title: "Swarm Intelligence",
    description:
      "Coordinated multi-robot systems working in unison via decentralized meshes to achieve complex tactical objectives.",
    icon: <Network className="w-6 h-6" />,
    tags: ["DISTRIBUTED_SYS", "MESH_NET", "BEHAVIOR_TREES"],
    colSpan: "md:col-span-2",
  },
];

export default function TracksSection() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#020202] border-t border-white/5 overflow-hidden">
      {/* The global layout grid handles the background, but we add a subtle overlay here if needed */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 border border-white/10 bg-white/[0.02] px-3 py-1.5 backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              R&D Vectors
            </span>
            <div className="w-1 h-3 bg-blue-500 animate-pulse ml-2" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white max-w-2xl tracking-tight leading-tight"
          >
            Operational <span className="text-neutral-500">Domains</span>
          </motion.h2>
        </div>

        {/* The Tactical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tracks.map((track, i) => (
            <BentoCard key={i} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Individual Card Component ---
function BentoCard({ track, index }: { track: TrackItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative p-8 border border-white/10 bg-[#050505] overflow-hidden hover:bg-white/[0.02] hover:border-blue-500/30 transition-all duration-300 ${track.colSpan}`}
    >
      {/* HUD Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-600 group-hover:border-blue-500 transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-600 group-hover:border-blue-500 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-600 group-hover:border-blue-500 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-600 group-hover:border-blue-500 transition-colors" />

      {/* Top Hover Line Sweep */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top: Icon & Identifier */}
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/[0.02] border border-white/10 text-neutral-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
            {track.icon}
          </div>
          <div className="text-[10px] font-mono text-neutral-600 group-hover:text-blue-500/60 transition-colors">
            {track.id}
          </div>
        </div>

        {/* Middle: Title & Description */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            {track.title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            {track.description}
          </p>
        </div>

        {/* Bottom: Tags & Action */}
        <div className="mt-auto">
          {/* Data Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {track.tags.map((tag, t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 bg-white/[0.02] text-neutral-400 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 group-hover:text-blue-300 transition-colors"
              >
                [{tag}]
              </span>
            ))}
          </div>

          {/* Terminal Command Link */}
          <div className="flex items-center text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer w-fit">
            <span className="text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
              &gt;
            </span>
            Access_Records
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
