"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Bot, Network, ChevronRight, Activity } from "lucide-react";

// --- Types ---
type TrackItem = {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
    colSpan: string; // Controls size in the grid
    gradient: string; // Unique hover color
};

// --- Data ---
const tracks: TrackItem[] = [
    {
        title: "Autonomous Navigation",
        description: "Developing self-governing agents capable of traversing unstructured environments without human intervention.",
        icon: <Bot className="w-8 h-8" />,
        tags: ["SLAM", "Path Planning", "ROS 2", "Sensor Fusion"],
        colSpan: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Computer Vision",
        description: "Enabling machines to interpret and understand the visual world using deep learning architectures.",
        icon: <Eye className="w-8 h-8" />,
        tags: ["Object Detection", "Segmentation", "YOLO", "OpenCV"],
        colSpan: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Embedded Systems",
        description: "The nervous system of robotics. High-performance PCB design and real-time firmware optimization.",
        icon: <Cpu className="w-8 h-8" />,
        tags: ["STM32", "Altium Designer", "RTOS", "Firmware"],
        colSpan: "md:col-span-1",
        gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
        title: "Swarm Intelligence",
        description: "Coordinated multi-robot systems working in unison to achieve complex objectives.",
        icon: <Network className="w-8 h-8" />,
        tags: ["Distributed Systems", "Mesh Networking", "Behavior Trees"],
        colSpan: "md:col-span-2",
        gradient: "from-orange-500/20 to-yellow-500/20",
    },
];

export default function TracksSection() {
    return (
        <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                            Research Domains
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white max-w-xl"
                    >
                        Core Competencies
                    </motion.h2>
                </div>

                {/* The Bento Grid */}
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
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative p-8 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-colors ${track.colSpan}`}
        >
            {/* Hover Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Grid Pattern Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-700" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full justify-between">

                {/* Top: Icon & Title */}
                <div>
                    <div className="mb-6 p-3 w-fit rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                        {track.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {track.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {track.description}
                    </p>
                </div>

                {/* Bottom: Tags & Action */}
                <div className="mt-auto">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {track.tags.map((tag, t) => (
                            <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5 group-hover:border-white/20 group-hover:text-neutral-200 transition-colors"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Learn More Link (Visual only) */}
                    <div className="flex items-center text-xs font-bold text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer">
                        View Research
                        <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}