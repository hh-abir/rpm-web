"use client";

import React from "react";
import {
  Terminal,
  Target,
  Cpu,
  ShieldAlert,
  Crosshair,
  Activity,
} from "lucide-react";

export default function AboutPage() {
  const capabilities = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Software-Defined Hardware",
      description:
        "Building autonomous systems where software dictates physical capabilities, allowing for rapid iteration and over-the-air tactical updates.",
    },
    {
      icon: <Crosshair className="w-5 h-5" />,
      title: "Precision & Autonomy",
      description:
        "Deploying advanced machine learning models to edge devices, enabling real-time decision making in signal-denied environments.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Hardened Infrastructure",
      description:
        "Developing resilient architectures designed to operate flawlessly under extreme duress and adversarial conditions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 text-blue-500">
              <Terminal className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Entity Overview
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              System <span className="text-neutral-500">Architecture</span>
            </h1>
          </div>

          <div className="flex gap-8 text-right">
            <div>
              <div className="text-2xl font-bold text-white flex items-center justify-end gap-2">
                <Activity className="w-4 h-4 text-green-400" />
                ONLINE
              </div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">
                System Status
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">EST. 2024</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">
                Initialization
              </div>
            </div>
          </div>
        </div>

        {/* The Mandate (Hero Text) */}
        <section className="mb-20 max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-4 h-4 text-blue-500" />
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Operational Mandate
            </h2>
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-snug text-neutral-200 mb-6">
            We engineer{" "}
            <span className="text-blue-400">
              next-generation autonomous systems
            </span>{" "}
            that bridge the gap between complex software algorithms and
            ruggedized hardware.
          </p>
          <p className="text-neutral-500 text-lg max-w-2xl leading-relaxed">
            Our mission is to solve the most intractable engineering challenges
            through a relentless focus on vertical integration, rapid
            prototyping, and software-first operational logic. We do not build
            prototypes; we build deployable assets.
          </p>
        </section>

        {/* Core Capabilities Grid */}
        <section className="mb-20">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Core Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-neutral-600 group-hover:text-blue-400 mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Telemetry / Raw Data Section */}
        <section>
          <div className="bg-black/50 border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Subtle glow effect inside the box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="z-10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to initiate a sequence?
              </h2>
              <p className="text-neutral-500 text-sm font-mono"></p>
            </div>

            <button className="z-10 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider rounded border border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
              Establish Contact
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
