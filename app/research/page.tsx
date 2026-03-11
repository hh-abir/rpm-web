"use client";

import React, { useState } from "react";
import {
  Microscope,
  FileText,
  Download,
  Lock,
  Activity,
  Radar,
  Cpu,
  Network,
  ChevronRight,
} from "lucide-react";
import TopologyRender from "@/components/research/TopologyRender";

// Mock Data for the Technical Archive
const PUBLICATIONS = [
  {
    id: "PUB-2025-089",
    title:
      "Dynamic Pathfinding in Signal-Denied Environments using Edge-Computed SLAM",
    authors: "Dr. A. Vance, R. Sterling",
    date: "2025-10-12",
    clearance: "PUBLIC RELEASE",
    status: "PUBLISHED",
    doi: "10.1038/s41598-025-12345-x",
  },
  {
    id: "PUB-2025-072",
    title:
      "Low-Latency Swarm Coordination Protocols via Decentralized Mesh Networks",
    authors: "Dr. E. Cross, M. Lin",
    date: "2025-08-04",
    clearance: "INTERNAL ONLY",
    status: "PEER REVIEW",
    doi: "PENDING",
  },
  {
    id: "PUB-2024-112",
    title: "Thermal Signature Mitigation in Micro-UAV Chassis Design",
    authors: "K. Chen",
    date: "2024-11-20",
    clearance: "PUBLIC RELEASE",
    status: "PUBLISHED",
    doi: "10.2514/1.G000000",
  },
];

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
      {/* HUD Grid Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 text-blue-500">
              <Microscope className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest">
                R&D Database
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Applied <span className="text-neutral-500">Research</span>
            </h1>
          </div>

          <div className="flex gap-8 text-right hidden md:flex">
            <div>
              <div className="text-2xl font-bold text-white">14</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">
                Active Vectors
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">128</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">
                Publications
              </div>
            </div>
          </div>
        </div>

        {/* Featured Briefing / Flagship Research */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              Priority Briefing
            </h2>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
              ACTIVE DEPLOYMENT
            </span>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-1 group hover:border-blue-500/30 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 bg-black/40">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <div className="text-xs font-mono text-neutral-500 mb-4">
                  IDENTIFIER: OP-SWARM-DELTA // DOMAIN: AUTONOMY
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Distributed Cognitive Architecture for UAS Swarms
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Moving beyond leader-follower paradigms. This research
                  outlines a fully decentralized computational mesh where
                  individual units process localized telemetry and negotiate
                  global tactical objectives in real-time, functioning optimally
                  even when heavily attrited.
                </p>

                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Read Whitepaper
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-white/20 text-white hover:bg-white/5 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all">
                    View Telemetry
                  </button>
                </div>
              </div>

              {/* Diagram / Visual Container */}
              <div className="w-full h-full min-h-[300px] border-l border-white/10 relative">
                <TopologyRender />
              </div>
            </div>
          </div>
        </section>

        {/* Active Research Vectors Grid */}
        <section className="mb-20">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Active Research Vectors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vector 1 */}
            <div className="border border-white/10 bg-black/50 p-6 flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Radar className="w-5 h-5 text-neutral-500" />
                  <span className="text-[10px] font-mono text-green-400">
                    PHASE 4
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Sensor Fusion
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2">
                  Aggregating LIDAR, EO/IR, and RF signatures into a single
                  cohesive operational picture.
                </p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-4">
                <div className="bg-blue-500 h-1 w-[85%]" />
              </div>
            </div>

            {/* Vector 2 */}
            <div className="border border-white/10 bg-black/50 p-6 flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Cpu className="w-5 h-5 text-neutral-500" />
                  <span className="text-[10px] font-mono text-amber-400">
                    PHASE 2
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Edge Inference
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2">
                  Optimizing neural networks to run on size, weight, and power
                  (SWaP) constrained hardware.
                </p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-4">
                <div className="bg-blue-500 h-1 w-[40%]" />
              </div>
            </div>

            {/* Vector 3 */}
            <div className="border border-white/10 bg-black/50 p-6 flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Network className="w-5 h-5 text-neutral-500" />
                  <span className="text-[10px] font-mono text-green-400">
                    PHASE 3
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Mesh Networking
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2">
                  Self-healing communication arrays for heavily contested
                  electromagnetic spectrums.
                </p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-4">
                <div className="bg-blue-500 h-1 w-[65%]" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Archive (Table List) */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-4 gap-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
              Technical Archive
            </h2>
            <div className="flex gap-2">
              {["ALL", "PUBLISHED", "INTERNAL"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-mono px-3 py-1 border transition-colors ${
                    activeTab === tab
                      ? "bg-white/10 border-white/20 text-white"
                      : "border-transparent text-neutral-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col border border-white/10 bg-black/20 divide-y divide-white/10">
            {/* Table Header (Hidden on Mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider bg-white/[0.02]">
              <div className="col-span-2">Identifier</div>
              <div className="col-span-5">Title / Authors</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Clearance</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* Table Rows */}
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:px-6 md:py-4 items-center group hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-2 text-xs font-mono text-blue-400">
                  {pub.id}
                </div>

                <div className="col-span-5">
                  <div className="text-sm font-bold text-neutral-200 mb-1 line-clamp-1 group-hover:text-white transition-colors">
                    {pub.title}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    AUTHORS: {pub.authors} {pub.doi}
                  </div>
                </div>

                <div className="col-span-2 text-xs font-mono text-neutral-400">
                  {pub.date}
                </div>

                <div className="col-span-2 flex items-center gap-2">
                  {pub.clearance === "PUBLIC RELEASE" ? (
                    <span className="text-[10px] font-mono text-green-400 border border-green-400/20 bg-green-400/10 px-2 py-0.5">
                      PUBLIC
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-amber-400 border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> RESTRICTED
                    </span>
                  )}
                </div>

                <div className="col-span-1 md:text-right mt-4 md:mt-0">
                  <button className="text-neutral-500 hover:text-blue-400 transition-colors p-2 md:p-0">
                    <Download className="w-5 h-5 md:ml-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
