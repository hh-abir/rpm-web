"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Crosshair,
  ShieldAlert,
  Zap,
  Database,
  Activity,
  Terminal,
} from "lucide-react";

// Helper component for the "Tech Specs" list
const TechSpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group">
    <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider flex items-center gap-2">
      <span className="w-1 h-1 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors" />
      {label}
    </span>
    <span className="text-xs text-neutral-200 font-mono">{value}</span>
  </div>
);

export default function MissionSection() {
  // Sharp, mechanical animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Snappy easing
    },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const coreValues = [
    {
      title: "Precision",
      desc: "Zero tolerance for drift or error.",
      icon: <Crosshair className="w-4 h-4" />,
    },
    {
      title: "Resilience",
      desc: "Built to operate under extreme duress.",
      icon: <ShieldAlert className="w-4 h-4" />,
    },
    {
      title: "Velocity",
      desc: "Rapid prototyping to deployment.",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Data-Driven",
      desc: "Telemetry dictates reality.",
      icon: <Database className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#020202] border-t border-white/5 overflow-hidden">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-10 md:left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* LEFT COLUMN: The Manifesto */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          {/* Header Label */}
          <div className="inline-flex items-center gap-3 mb-8 border border-white/10 bg-white/[0.02] px-3 py-1.5 w-max backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              Directive // 01-ALPHA
            </span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse ml-2" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            We don't just build systems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neutral-500">
              We engineer autonomy.
            </span>
          </h2>

          {/* Body Text */}
          <p className="text-neutral-400 text-lg leading-relaxed mb-10 border-l-2 border-blue-500/50 pl-6 bg-gradient-to-r from-blue-500/[0.02] to-transparent py-2">
            The Research & Project Management (RPM) division bridges the gap
            between theoretical robotics and tactical application. We operate
            strictly at the intersection of hardened hardware and algorithmic
            intelligence.
          </p>

          {/* "Core Values" Grid */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {coreValues.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover line indicator */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                <div className="text-neutral-500 group-hover:text-blue-400 transition-colors mb-3">
                  {item.icon}
                </div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Telemetry HUD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* The Tech Card Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

          {/* HUD Container */}
          <div className="relative w-full max-w-md bg-black/80 border border-white/10 p-1 backdrop-blur-xl">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-500" />

            <div className="bg-[#050505] p-6 border border-white/5 relative overflow-hidden">
              {/* Header of the Card */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-pulse" />[
                  RPM_CORE_TELEMETRY ]
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  SECURE UPLINK
                </div>
              </div>

              {/* Center Diagram Placeholder */}
              <div className="flex justify-center my-10 relative h-32">
                {/* Base rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/5 rounded-full" />

                {/* Animated scanning ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/20 rounded-full animate-spin [animation-duration:4s]">
                  <div className="absolute top-0 left-1/2 w-1/2 h-full border-r-2 border-blue-500 rounded-br-full" />
                </div>

                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-md">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)] animate-ping" />
                </div>

                {/* Crosshairs */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-blue-500/20" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-blue-500/20" />
              </div>

              {/* Data Specs List */}
              <div className="mt-8 space-y-1">
                <TechSpecItem label="Active Personnel" value="54 OPR" />
                <TechSpecItem label="Deployed Assets" value="12 UNITS" />
                <TechSpecItem label="Compute Capacity" value="24.5 TFLOPS" />
                <TechSpecItem label="Next Milestone" value="T-MINUS 14D" />
              </div>

              {/* System Load Footer */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex justify-between mb-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  <span>System Utilization</span>
                  <span className="text-blue-400">75.04%</span>
                </div>
                <div className="w-full bg-black h-1.5 border border-white/10 overflow-hidden relative">
                  {/* Segmented bar effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0px,transparent_2px,black_2px,black_4px)] bg-[size:4px_100%] z-10" />
                  <div className="bg-blue-500 h-full w-[75%] relative z-0" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
