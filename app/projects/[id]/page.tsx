"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, Activity, Shield, Users, GitBranch, Calendar, Terminal } from "lucide-react";
import { PROJECT_DATA } from "@/lib/project-data";

// Helper for params (Next.js 15+ syntax, but works for 14 too)
export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params (if using Next.js 15, otherwise just use params.id)
    const resolvedParams = use(params);

    const project = PROJECT_DATA.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20">

            {/* Background Noise */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Breadcrumb / Back Button */}
                <div className="mb-8">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-blue-400 transition-colors uppercase tracking-wider">
                        <ArrowLeft className="w-3 h-3" /> Back to Database
                    </Link>
                </div>

                {/* --- HEADER SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Left: Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded">
                                {project.status}
                            </span>
                            <span className="text-[10px] font-mono text-neutral-500">ID: {project.id}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                        <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6">Codename: {project.codename}</p>

                        <p className="text-neutral-300 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            {project.description}
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <div className="flex items-center gap-2 mb-1 text-neutral-400">
                                    <Activity className="w-4 h-4" />
                                    <span className="text-[10px] font-mono uppercase">Progress</span>
                                </div>
                                <div className="text-2xl font-bold text-white">{project.progress}%</div>
                                <div className="w-full h-1 bg-neutral-800 mt-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${project.progress}%` }} />
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <div className="flex items-center gap-2 mb-1 text-neutral-400">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-[10px] font-mono uppercase">Category</span>
                                </div>
                                <div className="text-2xl font-bold text-white">{project.category}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-[400px] w-full bg-neutral-900 rounded-xl overflow-hidden border border-white/10 group">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Technical Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="flex gap-2">
                                {project.techStack.slice(0, 3).map(tech => (
                                    <span key={tech} className="text-[10px] font-mono bg-black/50 backdrop-blur border border-white/20 px-2 py-1 rounded text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DETAILED SPECS SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

                    {/* Main Description */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-blue-500" />
                            Mission Briefing
                        </h3>
                        <div className="prose prose-invert max-w-none text-neutral-400 text-sm leading-7 bg-[#0a0a0a] border border-white/5 p-6 rounded-xl">
                            {project.longDescription}
                            <br /><br />
                            <p>
                                <strong>Technical Objective:</strong> Developing robust autonomy in unstructured environments is the primary goal.
                                This unit integrates advanced sensor fusion to handle variable lighting and terrain slippage.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Specs */}
                    <div className="space-y-6">

                        {/* Tech Specs Table */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-blue-500" /> System Specs
                            </h3>
                            <div className="space-y-3">
                                {project.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                        <span className="text-neutral-500 font-mono">{spec.label}</span>
                                        <span className="text-white font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Team Info */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-500" /> Personnel
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                                    {project.teamLead.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{project.teamLead}</div>
                                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Project Lead</div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <button className="w-full flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-xs text-neutral-300 transition-colors">
                                    <GitBranch className="w-3 h-3" /> View Repository
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}