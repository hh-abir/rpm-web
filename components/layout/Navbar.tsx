"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ChevronRight, Terminal, Zap } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Workshops", path: "/workshops" },
    { name: "Projects", path: "/projects" },
    { name: "Research", path: "/research" },
    { name: "Council", path: "/team" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Hide on scroll down, Show on scroll up
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* The "Floating" Container 
        We use 'fixed' positioning but add margins to make it float.
      */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
                    }`}
            >
                <nav className="relative w-full max-w-6xl mx-auto mt-4 md:mt-6 px-4">

                    {/* The Actual Bar */}
                    <div className="relative flex items-center justify-between px-4 py-3 md:px-6 md:py-3 rounded-xl border border-white/10 bg-[#050505]/80 backdrop-blur-md shadow-2xl shadow-black/50">

                        {/* Decorative Corner Markers (The "Tech" feel) */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 -translate-x-px -translate-y-px rounded-tl" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 translate-x-px -translate-y-px rounded-tr" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 -translate-x-px translate-y-px rounded-bl" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 translate-x-px translate-y-px rounded-br" />

                        {/* --- LOGO --- */}
                        <Link href="/" className="flex items-center gap-3 group z-10">
                            <div className="relative flex items-center justify-center w-9 h-9 bg-blue-950/30 border border-blue-500/30 rounded-lg overflow-hidden group-hover:border-blue-400/60 transition-colors">
                                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Cpu className="w-5 h-5 text-blue-400 relative z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white tracking-widest leading-none">RPM</span>
                                <span className="text-[8px] font-mono text-neutral-500 tracking-[0.2em] group-hover:text-blue-400 transition-colors">SYSTEMS</span>
                            </div>
                        </Link>

                        {/* --- DESKTOP NAV --- */}
                        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-lg border border-white/5">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link key={item.path} href={item.path} className="relative px-4 py-1.5 rounded-md group overflow-hidden">

                                        {/* Active/Hover Background */}
                                        <span
                                            className={`absolute inset-0 bg-white/10 transition-transform duration-300 ease-out origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                        />

                                        {/* Text */}
                                        <span className={`relative z-10 text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-white font-bold" : "text-neutral-400 group-hover:text-white"
                                            }`}>
                                            {item.name}
                                        </span>

                                        {/* Active Dot Indicator */}
                                        {isActive && (
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* --- RIGHT ACTIONS --- */}
                        <div className="hidden md:flex items-center gap-4 z-10">
                            {/* Status Pill */}
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded border border-white/10">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-neutral-400">NOMINAL</span>
                            </div>

                            {/* Join Button */}
                            <Link href="/join">
                                <button className="relative group px-5 py-2 overflow-hidden rounded bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors">
                                    <span className="relative z-10">Join Ops</span>
                                    {/* Glint Effect */}
                                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover:animate-shine" />
                                </button>
                            </Link>
                        </div>

                        {/* --- MOBILE TOGGLE --- */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-neutral-400 hover:text-white bg-white/5 rounded border border-white/10"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* --- MOBILE MENU (Full Screen Overlay) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-28 px-6 md:hidden"
                    >
                        {/* Grid BG */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, idx) => (
                                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.05 * idx }}
                                        className={`flex items-center justify-between p-4 rounded-lg border ${pathname === item.path
                                            ? "bg-blue-500/10 border-blue-500/50 text-white"
                                            : "bg-white/5 border-white/5 text-neutral-400"
                                            }`}
                                    >
                                        <span className="font-mono text-sm uppercase tracking-widest">{item.name}</span>
                                        {pathname === item.path && <Zap className="w-4 h-4 text-blue-400" />}
                                    </motion.div>
                                </Link>
                            ))}

                            <Link href="/join" onClick={() => setIsOpen(false)} className="mt-4">
                                <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded">
                                    Initialize
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}