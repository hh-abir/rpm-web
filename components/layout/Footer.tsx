"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Github, Cpu, Code, X, User, Mail, Globe, Terminal, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- YOUR DATA HERE ---
const DEV_INFO = {
    name: "Your Name", // REPLACE THIS
    roles: ["Full-Stack Dev", "Backend Architect"],
    robu_dept: "RPM Division",
    varsity_dept: "Dept. of CSE, BRAC University",
    image: "https://github.com/shadcn.png",
    links: {
        github: "https://github.com/yourusername",
        portfolio: "https://yourportfolio.com",
        facebook: "https://facebook.com/yourprofile",
        linkedin: "https://linkedin.com/in/yourprofile",
        email: "your.email@bracu.ac.bd" // Just the email string for display
    }
};

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-4 font-mono text-sm relative overflow-hidden">

                {/* Background Matrix Effect */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* --- TOP GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                        {/* 1. Brand Column */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <Cpu className="w-4 h-4 text-blue-600 animate-pulse" />
                                <span className="font-bold text-white tracking-widest">RPM_SYSTEMS</span>
                            </div>
                            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                                Research & Project Management Division.<br />
                                Robotics Club of BRAC University.
                            </p>
                        </div>

                        {/* 2. Navigation Column */}
                        <div>
                            <h4 className="text-white mb-4 text-xs border-b border-white/10 pb-2 w-fit">/root/nav</h4>
                            <ul className="space-y-2 text-neutral-400 text-xs">
                                <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                                <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                                <li><a href="/research" className="hover:text-blue-400 transition-colors">Research</a></li>
                                <li><a href="/team" className="hover:text-blue-400 transition-colors">Council</a></li>
                            </ul>
                        </div>

                        {/* 3. ARCHITECT COLUMN (Your Section) */}
                        <div className="flex flex-col items-start min-w-[240px]">
                            <h4 className="text-white mb-4 text-xs border-b border-white/10 pb-2 w-fit">/root/architect</h4>

                            <div className="flex flex-col gap-4 w-full">

                                {/* The Trigger Button */}
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/20 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/30 transition-all duration-300 w-fit"
                                >
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-blue-200 group-hover:text-white tracking-wider transition-colors">
                                        MEET THE DEVELOPER
                                    </span>
                                </button>

                                {/* Name, Email & Roles */}
                                <div>
                                    {/* Name */}
                                    <div className="text-lg font-bold text-white mb-0.5 group cursor-pointer hover:text-blue-400 transition-colors" onClick={() => setIsModalOpen(true)}>
                                        {DEV_INFO.name}
                                    </div>

                                    {/* Email Display (NEW) */}
                                    <a href={`mailto:${DEV_INFO.links.email}`} className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-orange-400 transition-colors mb-3 w-fit">
                                        <Mail className="w-3 h-3" />
                                        <span>{DEV_INFO.links.email}</span>
                                    </a>

                                    {/* Roles */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {DEV_INFO.roles.map((role, idx) => (
                                            <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-neutral-400">
                                                {role}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Dept Info */}
                                    <div className="text-[10px] text-neutral-500 font-mono leading-tight mb-4">
                                        <p>{DEV_INFO.robu_dept}</p>
                                        <p className="opacity-70">{DEV_INFO.varsity_dept}</p>
                                    </div>
                                </div>

                                {/* High Visibility Link Dock */}
                                <div className="grid grid-cols-2 gap-2 w-full">
                                    {/* GitHub */}
                                    <a href={DEV_INFO.links.github} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-white/30 hover:text-white transition-all group">
                                        <Github className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                                        <span className="text-[10px] font-bold text-neutral-400 group-hover:text-white">GitHub</span>
                                    </a>

                                    {/* Portfolio */}
                                    <a href={DEV_INFO.links.portfolio} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-green-950/30 hover:border-green-500/50 hover:text-green-400 transition-all group">
                                        <Globe className="w-3.5 h-3.5 text-neutral-500 group-hover:text-green-400 transition-colors" />
                                        <span className="text-[10px] font-bold text-neutral-400 group-hover:text-green-400">Web</span>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href={DEV_INFO.links.linkedin} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-blue-950/30 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                                        <Linkedin className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                                        <span className="text-[10px] font-bold text-neutral-400 group-hover:text-blue-400">Connect</span>
                                    </a>

                                    {/* Facebook */}
                                    <a href={DEV_INFO.links.facebook} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 hover:text-[#1877F2] transition-all group">
                                        <Facebook className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#1877F2] transition-colors" />
                                        <span className="text-[10px] font-bold text-neutral-400 group-hover:text-[#1877F2]">Social</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* 4. Club Connect Column */}
                        <div>
                            <h4 className="text-white mb-4 text-xs border-b border-white/10 pb-2 w-fit">/root/robu_connect</h4>
                            <div className="flex gap-3">
                                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="p-2 bg-white/5 rounded hover:bg-blue-600 hover:text-white text-neutral-400 transition-all">
                                        <Icon className="w-3 h-3" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- BOTTOM BAR --- */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600">
                        <div className="flex items-center gap-2 font-mono">
                            <Terminal className="w-3 h-3 text-green-500" />
                            <span className="text-green-500">sys_admin@robu:~$</span>
                            <span>./status_check.sh --year {currentYear}</span>
                            <span className="w-1.5 h-3 bg-green-500 animate-pulse ml-1" />
                        </div>

                        <div className="opacity-50 text-[10px] tracking-widest uppercase">
                            All Systems Nominal
                        </div>
                    </div>

                </div>
            </footer>

            {/* --- THE DEVELOPER MODAL (ID CARD) --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                        >
                            <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient" />
                            <div className="p-6 relative">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 p-1 text-neutral-500 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex justify-between items-center mb-6 opacity-50">
                                    <div className="flex items-center gap-2">
                                        <Cpu className="w-4 h-4" />
                                        <span className="text-[10px] tracking-[0.2em] font-mono">SYSTEM_ARCHITECT</span>
                                    </div>
                                    <span className="text-[10px] font-mono">ID: 001</span>
                                </div>
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="relative w-16 h-16 shrink-0">
                                        <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin-slow" />
                                        <Image src={DEV_INFO.image} alt="Dev" fill className="rounded-full object-cover p-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white leading-tight">{DEV_INFO.name}</h3>
                                        <p className="text-blue-400 text-xs font-mono mt-0.5">{DEV_INFO.robu_dept}</p>
                                        <p className="text-neutral-500 text-[10px] font-mono mt-0.5">{DEV_INFO.varsity_dept}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <a href={DEV_INFO.links.portfolio} target="_blank" className="flex items-center justify-center gap-2 p-2 rounded bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors">
                                        <User className="w-3.5 h-3.5" /> Portfolio
                                    </a>
                                    <a href={DEV_INFO.links.github} target="_blank" className="flex items-center justify-center gap-2 p-2 rounded bg-neutral-800 border border-white/10 text-white text-xs hover:border-white/30 transition-colors">
                                        <Github className="w-3.5 h-3.5" /> GitHub
                                    </a>
                                    <a href={`mailto:${DEV_INFO.links.email}`} className="flex items-center justify-center gap-2 p-2 rounded bg-neutral-800 border border-white/10 text-white text-xs hover:border-white/30 transition-colors">
                                        <Mail className="w-3.5 h-3.5" /> Email
                                    </a>
                                </div>
                                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] text-neutral-600 font-mono">
                                    <span>ACCESS GRANTED</span>
                                    <span>SECURE CONNECTION</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}