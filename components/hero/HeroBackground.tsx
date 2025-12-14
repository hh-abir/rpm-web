"use client";
import { motion } from "framer-motion";

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#050505] bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px]">
            {/* This outer div creates a static faint dot pattern */}

            {/* The motion div below creates the moving subtle grid lines */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full"
                style={{
                    // Creates a subtle grid pattern using CSS gradients
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '6rem 6rem', // Size of the large grid squares
                }}
            >
                {/* This adds a radial gradient mask so the grid fades out towards edges */}
                <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </motion.div>

            {/* Optional: A subtle glowing orb effect in the center background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>
    );
};