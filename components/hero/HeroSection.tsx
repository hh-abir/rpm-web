"use client";
import { motion, Variants } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import Link from "next/link";

export default function HeroSection() {
    // 2. Explicitly type this object as 'Variants'
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // 3. Explicitly type this as 'Variants'
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                // 4. We use 'as const' here to tell TS this is exactly 4 numbers (a tuple), not just a random array
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4">
            <HeroBackground />

            {/* Main Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                {/* Technical Top Label */}
                <motion.div variants={itemVariants} className="mb-6 flex justify-center">
                    <span className="px-3 py-1 text-xs font-mono text-blue-400/80 bg-blue-950/30 border border-blue-800/50 rounded-full tracking-wider uppercase">
                        ROBU // RPM Division // System Status: Active
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6"
                >
                    Engineering the <br /> Autonomy of Tomorrow.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The Research and Project Management wing of BRAC University Robotics
                    Club. We translate complex data into deployable robotic solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="/projects">
                        <button className="group relative px-8 py-3 font-semibold text-sm bg-white text-black rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="relative z-10">Explore Projects</span>
                            {/* Subtle glow on hover */}
                            <div className="absolute inset-0 h-full w-full bg-blue-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        </button>
                    </Link>

                    <Link href="/about">
                        <button className="px-8 py-3 font-semibold text-sm text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-all hover:border-neutral-600">
                            Our Methodology
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Decorative Bottom Data Stream */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-0 w-full flex justify-between px-10 text-[10px] font-mono text-neutral-600 uppercase tracking-widest"
            >
                <div>Coords: 23.77° N, 90.40° E</div>
                <div className="hidden md:block">/// BRACU ROBOTICS RESEARCH ///</div>
                <div>Version 2024.Q4</div>
            </motion.div>
        </section>
    );
}