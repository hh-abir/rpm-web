"use client";

import React, { useState } from "react";
import { Database, Filter, Search } from "lucide-react";
import { PROJECT_DATA } from "@/lib/project-data";
import ProjectCard from "@/components/projects/ProjectCard"; // Import the separate file

export default function ProjectsPage() {
    const [filter, setFilter] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["ALL", "AERIAL", "GROUND", "MARINE", "SOFTWARE"];

    const filteredProjects = PROJECT_DATA.filter((project) => {
        const matchesCategory = filter === "ALL" || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-6 border-b border-white/10 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2 text-blue-500">
                            <Database className="w-5 h-5" />
                            <span className="text-xs font-mono uppercase tracking-widest">Asset Database</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Project <span className="text-neutral-500">Directory</span>
                        </h1>
                    </div>

                    <div className="flex gap-8 text-right">
                        <div>
                            <div className="text-2xl font-bold text-white">{PROJECT_DATA.length}</div>
                            <div className="text-[10px] font-mono text-neutral-500 uppercase">Total Assets</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-400">{PROJECT_DATA.filter(p => p.status === 'DEPLOYED').length}</div>
                            <div className="text-[10px] font-mono text-neutral-500 uppercase">Deployed</div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded border transition-all ${filter === cat
                                        ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                        : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search database..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded px-10 py-2.5 text-xs text-white font-mono focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-700"
                        />
                    </div>
                </div>

                {/* Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full py-20 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                            <Filter className="w-6 h-6 text-neutral-600" />
                        </div>
                        <h3 className="text-neutral-300 font-bold mb-1">No Assets Found</h3>
                        <p className="text-neutral-500 text-sm">Adjust your search parameters.</p>
                    </div>
                )}
            </div>
        </main>
    );
}