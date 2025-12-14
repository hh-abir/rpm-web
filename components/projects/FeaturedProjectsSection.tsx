"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Layers, Terminal } from "lucide-react";
import Image from "next/image";

// --- Types ---
type Project = {
    id: string;
    title: string;
    description: string;
    // Use local paths like '/images/rover.jpg' in production
    imageSrc: string;
    techStack: string[];
    status: "DEPLOYED" | "PROTOTYPE" | "RESEARCH";
};

// --- Data ---
const projects: Project[] = [
    {
        id: "P-01",
        title: "Aurora Rover Mk. IV",
        description: "Autonomous distinct terrain navigation vehicle designed for university rover challenges. Features custom suspension and visuals-based SLAM.",
        imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder
        techStack: ["ROS 2", "Python", "OpenCV", "NVIDIA Jetson"],
        status: "DEPLOYED",
    },
    {
        id: "P-02",
        title: "Project Sentinel Drone",
        description: "Aerial surveillance swarm unit capable of coordinated flight patterns and real-time object detection in disaster scenarios.",
        imageSrc: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder
        techStack: ["PX4 Autopilot", "C++", "MavLink", "YOLOv8"],
        status: "PROTOTYPE",
    },
    {
        id: "P-03",
        title: "Neural Arm Manipulator",
        description: "6-DOF robotic arm using reinforcement learning for adaptive grasping of unknown objects without prior CAD models.",
        imageSrc: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder
        techStack: ["PyTorch", "MoveIt!", "Gazebo Sim", "Arduino"],
        status: "RESEARCH",
    },
    {
        id: "P-04",
        title: "Underwater AUV 'Nautilus'",
        description: "Submersible autonomous vehicle for pipe inspection and environmental data collection in turbid water conditions.",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Placeholder
        techStack: ["Blue Robotics", "Raspberry Pi", "Sonar", "Python"],
        status: "PROTOTYPE",
    },
];

// --- Main Component ---
export default function FeaturedProjectsSection() {
    // Refs for calculating drag constraints
    const carouselRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [constraint, setConstraint] = useState(0);

    // Calculate how far the carousel can be dragged
    useEffect(() => {
        if (!carouselRef.current || !trackRef.current) return;
        // The drag limit is the difference between the total track width and the visible container width
        const constraintValue = trackRef.current.scrollWidth - carouselRef.current.offsetWidth;
        // Add a small buffer (e.g., 32px) so it doesn't feel too tight against the edge
        setConstraint(constraintValue > 0 ? -constraintValue - 32 : 0);
    }, []);

    // Helper for Status Colors
    const getStatusColor = (status: Project["status"]) => {
        switch (status) {
            case "DEPLOYED": return "text-green-400 bg-green-950/30 border-green-800/50";
            case "PROTOTYPE": return "text-yellow-400 bg-yellow-950/30 border-yellow-800/50";
            case "RESEARCH": return "text-blue-400 bg-blue-950/30 border-blue-800/50";
            default: return "text-neutral-400";
        }
    };

    return (
        <section className="relative w-full py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                        Project Directive
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
                    Featured Deployments
                </h2>
            </div>

            {/* Carousel Container */}
            {/* We use overflow-x-hidden here, but allow dragging inside */}
            <div ref={carouselRef} className="w-full overflow-x-hidden cursor-grab active:cursor-grabbing pl-4 md:pl-[max(1rem,calc((100vw-72rem)/2))]">
                <motion.div
                    ref={trackRef}
                    drag="x"
                    dragConstraints={{ left: constraint, right: 0 }}
                    dragElastic={0.1} // Adds a slight bounce effect at the edges
                    className="flex gap-6 w-fit pr-12"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} getStatusColor={getStatusColor} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// --- Individual Project Card Component ---
function ProjectCard({ project, getStatusColor }: { project: Project, getStatusColor: any }) {
    return (
        <motion.div
            className="group relative h-[450px] w-[350px] md:w-[400px] flex-shrink-0 rounded-xl border border-white/10 bg-neutral-900 overflow-hidden hover:border-blue-500/30 transition-colors duration-500"
        >
            {/* Background Image - Grayscale by default, color on hover */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                {/* Top: Status & ID */}
                <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-neutral-500 bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                        ID: {project.id}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded border backdrop-blur-md tracking-wider ${getStatusColor(project.status)}`}>
                        [{project.status}]
                    </span>
                </div>

                {/* Bottom: Details */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-3 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        <Terminal className="w-3 h-3 text-blue-500 mr-1" />
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 group-hover:border-blue-500/20 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Link (Visual) */}
                    <div className="flex items-center text-xs font-bold text-blue-400 uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                        Inspect Project
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}