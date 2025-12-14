"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

// --- Types ---
type Member = {
    name: string;
    role: string;
    image: string;
    id: string; // e.g., "RPM-01"
    clearance: "Lvl 5" | "Lvl 4" | "Lvl 3"; // Flavor text
    socials: {
        github?: string;
        linkedin?: string;
        email?: string;
    };
};

// --- Data ---
const members: Member[] = [
    {
        name: "Dr. Arshad M. Chowdhury",
        role: "Advisor / Dean",
        id: "RPM-00",
        clearance: "Lvl 5",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop", // Placeholder
        socials: { linkedin: "#", email: "#" },
    },
    {
        name: "John Doe",
        role: "Director of RPM",
        id: "RPM-01",
        clearance: "Lvl 4",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        socials: { github: "#", linkedin: "#" },
    },
    {
        name: "Jane Smith",
        role: "Lead Researcher (AI)",
        id: "RPM-02",
        clearance: "Lvl 3",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        socials: { github: "#", linkedin: "#" },
    },
    {
        name: "Alex Johnson",
        role: "Systems Architect",
        id: "RPM-03",
        clearance: "Lvl 3",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        socials: { github: "#", email: "#" },
    },
];

export default function CouncilSection() {
    return (
        <section className="relative w-full py-24 px-4 bg-[#0a0a0a]">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                    Chain of Command
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Council Members
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto opacity-50" />
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {members.map((member, index) => (
                    <MemberCard key={index} member={member} index={index} />
                ))}
            </div>
        </section>
    );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#050505] border border-white/10 rounded-lg p-4 hover:border-blue-500/40 transition-colors duration-300"
        >
            {/* Top Metadata Row */}
            <div className="flex justify-between items-center mb-4 text-[10px] font-mono text-neutral-500">
                <span>{member.id}</span>
                <span className={member.clearance === "Lvl 5" ? "text-yellow-500" : "text-blue-500"}>
                    [{member.clearance}]
                </span>
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded bg-neutral-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:4px_4px] opacity-20 pointer-events-none" />
            </div>

            {/* Name & Role */}
            <div className="mb-4">
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                    {member.name}
                </h3>
                <p className="text-blue-500/80 text-sm font-mono mt-1">
                    {`< ${member.role} />`}
                </p>
            </div>

            {/* Social Actions (Slide up on hover) */}
            <div className="flex gap-3 pt-4 border-t border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
                {member.socials.github && (
                    <a href={member.socials.github} className="text-neutral-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                    </a>
                )}
                {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-neutral-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
                {member.socials.email && (
                    <a href={`mailto:${member.socials.email}`} className="text-neutral-400 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                )}
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20" />
        </motion.div>
    );
}