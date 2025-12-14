"use client";

import { useEffect, useRef } from "react";
import { useInView, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
type Metric = {
    id: string;
    label: string;
    value: number;
    suffix: string;
    description: string;
};

// --- Data ---
const metrics: Metric[] = [
    {
        id: "01",
        label: "Active Projects",
        value: 12,
        suffix: "",
        description: "Currently in development",
    },
    {
        id: "02",
        label: "Research Papers",
        value: 8,
        suffix: "",
        description: "Published in IEEE/Scopus",
    },
    {
        id: "03",
        label: "Team Members",
        value: 54,
        suffix: "+",
        description: "Engineers & Researchers",
    },
    {
        id: "04",
        label: "Research Grants",
        value: 150,
        suffix: "k",
        description: "BDT Funding Secured",
    },
];

// --- Counter Component ---
function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Intentionally formatting with 0 decimals for clean look
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    Math.floor(latest)
                );
            }
        });
    }, [springValue]);

    return (
        <span className="flex">
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
}

export default function ImpactSection() {
    return (
        <section className="w-full bg-[#050505] border-y border-white/5 py-16 md:py-24 relative overflow-hidden">

            {/* Decorative Background Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, index) => (
                        <div key={metric.id} className="relative group">
                            {/* Vertical Separator Line (except for last item) */}
                            {index !== metrics.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                            )}

                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                {/* ID Label */}
                                <div className="mb-2 text-[10px] font-mono text-blue-500/80 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded w-fit">
                                    DATAPOINT_{metric.id}
                                </div>

                                {/* The Big Number */}
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                                    <Counter value={metric.value} suffix={metric.suffix} />
                                </div>

                                {/* Label */}
                                <div className="text-sm font-semibold text-neutral-200 uppercase tracking-wide">
                                    {metric.label}
                                </div>

                                {/* Description */}
                                <div className="text-xs text-neutral-500 mt-1 font-mono">
                                    {metric.description}
                                </div>
                            </div>

                            {/* Hover Effect: Bottom glow bar */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}