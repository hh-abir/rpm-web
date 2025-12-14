"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Helper component for the "Tech Specs" list
const TechSpecItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between border-b border-white/10 py-2 text-sm">
        <span className="text-neutral-500 font-mono">{label}</span>
        <span className="text-neutral-300 font-mono">{value}</span>
    </div>
);

export default function MissionSection() {
    // Animation Variants
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const staggerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <section className="relative w-full py-24 px-4 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
            {/* Background Grid Line (Vertical) */}
            <div className="absolute top-0 left-10 md:left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* LEFT COLUMN: The Manifesto */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col justify-center"
                >
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.2em]">
                            Mission Directive 01
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        We don't just build robots. <br />
                        <span className="text-neutral-500">We engineer autonomy.</span>
                    </h2>

                    {/* Body Text */}
                    <p className="text-neutral-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                        The Research & Project Management (RPM) department exists to bridge the gap between
                        theoretical robotics and real-world application. We operate at the intersection of
                        hardware engineering and algorithmic intelligence.
                    </p>

                    {/* "Core Values" Grid */}
                    <motion.div
                        variants={staggerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { title: "Precision", desc: "Zero tolerance for error." },
                            { title: "Scalability", desc: "Built for growth." },
                            { title: "Innovation", desc: "Beyond state-of-the-art." },
                            { title: "Data-Driven", desc: "Evidence over intuition." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                className="p-4 bg-white/5 border border-white/5 rounded hover:border-blue-500/30 transition-colors"
                            >
                                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                <p className="text-xs text-neutral-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT COLUMN: The "Schematic" Visual */}
                {/* Instead of a photo, we build a "System Status" card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                >
                    {/* The Tech Card */}
                    <div className="relative w-full max-w-md p-1 bg-gradient-to-b from-white/10 to-transparent rounded-xl">
                        <div className="bg-[#050505] rounded-lg p-6 border border-white/10 relative overflow-hidden">

                            {/* Glowing corner effect */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-xl rounded-full" />

                            {/* Header of the Card */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div className="text-sm font-mono text-neutral-400">RPM_CORE_MODULE</div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </div>
                            </div>

                            {/* Diagram Placeholder (The Circle) */}
                            <div className="flex justify-center my-8 relative">
                                {/* Animated rotating rings */}
                                <div className="w-32 h-32 border border-blue-500/20 rounded-full flex items-center justify-center relative">
                                    <div className="absolute w-full h-full border-t border-blue-500 rounded-full animate-spin [animation-duration:3s]" />
                                    <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                                    </div>
                                </div>
                                {/* Connecting lines */}
                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
                                <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -z-10" />
                            </div>

                            {/* Data Specs List */}
                            <div className="space-y-1">
                                <TechSpecItem label="Active Researchers" value="54" />
                                <TechSpecItem label="Projects Deployed" value="12" />
                                <TechSpecItem label="Compute Power" value="24.5 TFLOPS" />
                                <TechSpecItem label="Next Deadline" value="T-minus 14 days" />
                            </div>

                            {/* Footer of Card */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 h-full w-[75%]" />
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] font-mono text-neutral-500 uppercase">
                                    <span>System Load</span>
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Elements behind the card */}
                    <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
                </motion.div>

            </div>
        </section>
    );
}