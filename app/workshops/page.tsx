"use client";

import React, { useState } from "react";
import { Cpu, Archive, Terminal } from "lucide-react";

// --- Imports from our new modules ---
import { WORKSHOP_DATA, Workshop } from "@/lib/workshop-data";
import ActiveWorkshopCard from "@/components/workshops/ActiveWorkshopCard";
import ArchiveLogTable from "@/components/workshops/ArchiveLogTable";
import RegistrationModal from "@/components/workshops/RegistrationModal";

export default function WorkshopsPage() {
    const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

    // Filter Data
    const upcomingWorkshops = WORKSHOP_DATA.filter((w) => w.status === "UPCOMING");
    const pastWorkshops = WORKSHOP_DATA.filter((w) => w.status === "COMPLETED");

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">

            {/* Background Grid */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* --- HERO SECTION --- */}
                <div className="mb-16 pt-6 border-b border-white/10 pb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                            <Cpu className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-mono text-sm text-blue-400 tracking-widest uppercase">
                            System Training
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Workshops & <span className="text-neutral-500">Certifications.</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
                        Engage in high-intensity technical modules designed to upgrade your engineering stack.
                    </p>
                </div>

                {/* --- ACTIVE OPERATIONS (Active/Upcoming) --- */}
                <section className="mb-20">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <h2 className="text-xl font-bold tracking-wide">Active Operations</h2>
                        </div>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-blue-900/10 border border-blue-500/20 rounded-full">
                            <Terminal className="w-3 h-3 text-blue-400" />
                            <span className="text-[10px] font-mono text-blue-300">REGISTRATION_PORT_OPEN</span>
                        </div>
                    </div>

                    {/* LAYOUT CHANGE: 
             Using a grid that limits width on large screens to keep cards from looking stretched.
          */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingWorkshops.map((workshop) => (
                            <ActiveWorkshopCard
                                key={workshop.id}
                                workshop={workshop}
                                onRegister={() => setSelectedWorkshop(workshop)}
                            />
                        ))}
                    </div>
                </section>

                {/* --- ARCHIVED LOGS (Past) --- */}
                <section>
                    <div className="flex items-center gap-3 mb-6 opacity-70 border-l-2 border-white/20 pl-4">
                        <Archive className="w-5 h-5 text-neutral-500" />
                        <h2 className="text-lg font-bold text-neutral-300">Archived Logs</h2>
                    </div>

                    {/* LAYOUT CHANGE:
             Replaced the small cards with a full-width Table Component.
             This gives the archive section significant visual weight without looking cluttered.
          */}
                    <ArchiveLogTable workshops={pastWorkshops} />
                </section>

            </div>

            {/* --- MODAL --- */}
            <RegistrationModal
                workshop={selectedWorkshop}
                onClose={() => setSelectedWorkshop(null)}
            />
        </main>
    );
}