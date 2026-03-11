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
    label: "Team Personnel",
    value: 54,
    suffix: "+",
    description: "Engineers & Researchers",
  },
  {
    id: "04",
    label: "Research Grants",
    value: 150,
    suffix: "K",
    description: "BDT Funding Secured",
  },
];

// --- Counter Component ---
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  // Adjusted spring to feel more mechanical and rigid
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
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
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return (
    <span className="flex items-baseline font-mono tracking-tight">
      <span ref={ref} className="text-white">
        0
      </span>
      <span className="text-blue-500 ml-1">{suffix}</span>
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section className="w-full bg-[#020202] py-20 relative overflow-hidden">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
            Operational Metrics
          </h2>
          <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 animate-pulse" />
            LIVE TELEMETRY
          </div>
        </div>

        {/* Rigid Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/40 backdrop-blur-sm">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative group p-8 lg:p-10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Hover Bar (Top) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <div className="flex flex-col text-left">
                {/* Terminal Identifier */}
                <div className="mb-6 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-blue-400 transition-colors">
                    &gt; TGT_MTRC_{metric.id}
                  </span>
                </div>

                {/* The Big Number */}
                <div className="text-5xl lg:text-6xl font-bold mb-4">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <div className="text-sm font-bold text-neutral-200 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">
                  {metric.label}
                </div>

                {/* Description */}
                <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
