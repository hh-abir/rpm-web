"use client";

import React, { useState } from "react";
import {
  Terminal,
  Crosshair,
  MapPin,
  Shield,
  Zap,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

// --- Mock Data: Open Requisitions ---
const REQ_DATA = [
  {
    id: "REQ-092-A",
    title: "Forward Deployed Engineer",
    division: "FIELD OPS",
    location: "Global / OCONUS",
    clearance: "SECRET ELIGIBLE",
    type: "FULL-TIME",
  },
  {
    id: "REQ-084-B",
    title: "Lead Embedded Systems Architect",
    division: "HARDWARE",
    location: "HQ - Dhaka",
    clearance: "NONE REQUIRED",
    type: "FULL-TIME",
  },
  {
    id: "REQ-105-C",
    title: "Computer Vision Researcher",
    division: "AUTONOMY",
    location: "Remote / HQ",
    clearance: "NONE REQUIRED",
    type: "CONTRACT",
  },
  {
    id: "REQ-112-A",
    title: "Rust Protocol Engineer",
    division: "COMMUNICATIONS",
    location: "HQ - Dhaka",
    clearance: "INTERNAL",
    type: "FULL-TIME",
  },
];

// --- Visual Component: Radar HUD ---
const TargetingRadar = () => (
  <div className="relative w-full aspect-square max-w-[400px] mx-auto border border-white/10 bg-[#020202] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.1)]">
    {/* Grid Lines */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:20px_20px]" />

    {/* Concentric Rings */}
    <div className="absolute w-[80%] h-[80%] border border-blue-500/20 rounded-full" />
    <div className="absolute w-[60%] h-[60%] border border-blue-500/30 rounded-full" />
    <div className="absolute w-[40%] h-[40%] border border-blue-500/40 rounded-full" />
    <div className="absolute w-[20%] h-[20%] border border-blue-500/50 rounded-full" />

    {/* Crosshairs */}
    <div className="absolute w-full h-[1px] bg-blue-500/30" />
    <div className="absolute h-full w-[1px] bg-blue-500/30" />

    {/* Radar Sweep Animation (requires tailwind.config setup or inline style) */}
    <div
      className="absolute w-[50%] h-[50%] top-0 right-0 origin-bottom-left border-l border-blue-500/80"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(37,99,235,0.4) 0%, transparent 50%)",
        animation: "spin 4s linear infinite",
      }}
    />

    {/* Tracking Targets */}
    <div className="absolute top-[30%] left-[60%] flex flex-col items-center animate-pulse">
      <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,1)]" />
      <span className="text-[8px] font-mono text-red-500 mt-1">TGT-LOCK</span>
    </div>
    <div
      className="absolute top-[60%] left-[25%] flex flex-col items-center"
      style={{ animation: "pulse 2s infinite 1s" }}
    >
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
      <span className="text-[8px] font-mono text-green-500 mt-1">ALLY-OK</span>
    </div>

    {/* Center Node */}
    <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]" />
  </div>
);

// --- Main Page Component ---
export default function JoinPage() {
  const [hoveredReq, setHoveredReq] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
      {/* Background Matrix */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 text-blue-500">
              <Terminal className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Personnel Database
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Active <span className="text-neutral-500">Requisitions</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-2xl font-bold text-white flex items-center justify-end gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              RECRUITING
            </div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase">
              Network Status
            </div>
          </div>
        </div>

        {/* Hero & Radar Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Crosshair className="w-4 h-4 text-blue-500" />
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
                  Call to Action
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Build systems that <br />
                <span className="text-blue-500">dictate reality.</span>
              </h3>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-xl">
                We are looking for elite operators. Engineers who prefer the
                command line over slide decks, who understand that latency is
                lethal, and who want to deploy hardware to the edge of the
                physical world.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all">
                  View Open Roles
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all">
                  General Submission
                </button>
              </div>
            </div>

            {/* Radar Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <TargetingRadar />
              {/* Decorative Terminal Overlay */}
              <div className="absolute bottom-0 left-0 lg:left-10 bg-black/80 border border-white/10 p-4 backdrop-blur-md">
                <div className="text-[10px] font-mono text-green-400 mb-1">
                  &gt; SCANNING GLOBAL TALENT POOL...
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  &gt; MATCH FOUND: 4 OPEN REQS
                </div>
                <div className="text-[10px] font-mono text-blue-400 animate-pulse">
                  &gt; WAITING FOR UPLOAD_
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="mb-24">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Operating Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.02] border border-white/10 p-8">
              <Zap className="w-6 h-6 text-blue-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-3">
                Velocity over Consensus
              </h4>
              <p className="text-sm text-neutral-500">
                We do not wait for committees. If you have a working prototype
                that outperforms the baseline, it ships.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8">
              <Shield className="w-6 h-6 text-blue-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-3">
                Mission Criticality
              </h4>
              <p className="text-sm text-neutral-500">
                Our systems operate in high-stakes environments. We engineer for
                maximum resilience; failure is not handled, it is mitigated.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8">
              <Terminal className="w-6 h-6 text-blue-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-3">
                Full-Stack Ownership
              </h4>
              <p className="text-sm text-neutral-500">
                You are responsible for your code from the editor to the edge
                device. Silos do not exist here.
              </p>
            </div>
          </div>
        </section>

        {/* Open Requisitions Table */}
        <section>
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Open Requisitions
            </h2>
            <div className="text-[10px] font-mono text-neutral-500">
              LAST UPDATED: {new Date().toISOString().split("T")[0]}
            </div>
          </div>

          <div className="flex flex-col border border-white/10 bg-black/20 divide-y divide-white/10">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider bg-white/[0.02]">
              <div className="col-span-2">Req-ID</div>
              <div className="col-span-4">Role Designation</div>
              <div className="col-span-2">Division</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* List */}
            {REQ_DATA.map((req) => (
              <div
                key={req.id}
                onMouseEnter={() => setHoveredReq(req.id)}
                onMouseLeave={() => setHoveredReq(null)}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:px-6 md:py-5 items-center group hover:bg-blue-900/10 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Active Hover Bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 bg-blue-500 transition-transform duration-300 ${hoveredReq === req.id ? "scale-y-100" : "scale-y-0"}`}
                />

                <div className="col-span-2 text-xs font-mono text-blue-400">
                  {req.id}
                </div>

                <div className="col-span-4">
                  <div className="text-base font-bold text-neutral-200 mb-1 group-hover:text-white group-hover:translate-x-1 transition-all">
                    {req.title}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    CLEARANCE: {req.clearance}
                  </div>
                </div>

                <div className="col-span-2 text-xs font-mono text-neutral-400">
                  <span className="border border-white/10 bg-white/5 px-2 py-1 rounded">
                    {req.division}
                  </span>
                </div>

                <div className="col-span-2 text-xs font-mono text-neutral-400 flex items-center gap-2 mt-4 md:mt-0">
                  <MapPin className="w-3 h-3" />
                  {req.location}
                </div>

                <div className="col-span-2 md:text-right mt-4 md:mt-0 flex justify-end">
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${hoveredReq === req.id ? "text-blue-400 translate-x-1 -translate-y-1" : "text-neutral-600"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
