"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link
import Image from "next/image";
import { Project } from "@/lib/project-data";

const getStatusColor = (status: Project["status"]) => {
    switch (status) {
        case "DEPLOYED": return "bg-green-500/10 text-green-400 border-green-500/20";
        case "PROTOTYPE": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
        case "RESEARCH": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
        case "DECOMMISSIONED": return "bg-neutral-500/10 text-neutral-400 border-neutral-500/20";
        default: return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.id}`}>
            <motion.div
                whileHover={{ y: -5 }}
                className="group relative flex flex-col bg-[#080808] border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 h-full"
            >
                {/* Header Image Area */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent" />

                    <div className="absolute top-3 right-3">
                        <span className="text-[9px] font-mono font-bold bg-black/80 backdrop-blur border border-white/10 px-2 py-1 rounded text-white tracking-widest uppercase">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono text-blue-500 tracking-widest uppercase">
                            {project.codename}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 border rounded uppercase font-bold tracking-wider ${getStatusColor(project.status)}`}>
                            {project.status}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-neutral-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-[9px] text-neutral-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
        </Link>
    );
}