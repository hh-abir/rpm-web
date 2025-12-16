"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle, Terminal, User, ArrowRight, X } from "lucide-react";
import { WORKSHOP_DATA } from "@/lib/workshop-data";
import RegistrationModal from "@/components/workshops/RegistrationModal";

// Helper for dynamic params in Next.js 14/15
export default function WorkshopDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const workshop = WORKSHOP_DATA.find((w) => w.id === resolvedParams.id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!workshop) {
        notFound();
    }

    // Fallback: If data still has old 'instructor' object, wrap it in an array for the loop
    // @ts-ignore
    const instructorsList = workshop.instructors || (workshop.instructor ? [workshop.instructor] : []);

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative selection:bg-blue-500/30">

            {/* Background Noise */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Breadcrumb */}
                <Link href="/workshops" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-blue-400 transition-colors uppercase tracking-wider mb-8">
                    <ArrowLeft className="w-3 h-3" /> Abort / Return to List
                </Link>

                {/* --- HEADER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                    {/* Left: Title & Meta */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-2 py-0.5 text-[10px] font-bold border rounded uppercase tracking-wider ${workshop.status === 'UPCOMING' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20'}`}>
                                {workshop.status}
                            </span>
                            <span className="text-[10px] font-mono text-neutral-500">ID: {workshop.id}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {workshop.title}
                        </h1>

                        {/* Meta Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10">
                            <div className="flex items-center gap-2 text-neutral-400">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-mono">{workshop.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-mono">{workshop.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-mono">{workshop.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <Users className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-mono">{workshop.capacity}</span>
                            </div>
                        </div>
                    </div>

                    {/* Changed h-48 to aspect-video (16:9) and object-cover to object-contain */}
                    <div className="hidden lg:block relative w-full h-[400px] aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 group">
                        <Image
                            src={workshop.image}
                            alt={workshop.title}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


                {/* --- CONTENT LAYOUT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT COLUMN: Main Info */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <section>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-blue-500" /> Mission Briefing
                            </h3>
                            <div className="prose prose-invert max-w-none text-neutral-400 text-sm leading-7">
                                <p>{workshop.longDescription}</p>
                            </div>
                        </section>

                        {/* Prerequisites */}
                        <section>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500" /> Prerequisites
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {workshop.prerequisites.map((req, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded text-sm text-neutral-300">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Agenda Timeline */}
                        {workshop.agenda.length > 0 && (
                            <section>
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-500" /> Execution Timeline
                                </h3>
                                <div className="space-y-0 relative border-l border-white/10 ml-2">
                                    {workshop.agenda.map((slot, i) => (
                                        <div key={i} className="relative pl-8 pb-8 last:pb-0">
                                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-black border border-blue-500" />
                                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                                                <span className="text-xs font-mono text-blue-400 font-bold">{slot.time}</span>
                                                <h4 className="text-sm font-bold text-white">{slot.module}</h4>
                                            </div>
                                            <p className="text-xs text-neutral-500">{slot.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <div className="space-y-6">

                        {/* Action Card */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 top-24 shadow-2xl shadow-black/50 z-20">

                            {/* Price Section */}
                            <div className="mb-6 pb-6 border-b border-white/5">
                                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                                    Registration Fee
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold text-white tracking-tight">
                                        {workshop.price}
                                    </span>
                                    {workshop.price.toLowerCase().includes('free') && (
                                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase rounded border border-green-500/30">
                                            Waived
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] text-neutral-600 mt-2">
                                    *Includes access to all workshop resources and certification.
                                </p>
                            </div>

                            {/* Button Section */}
                            {workshop.status === 'UPCOMING' ? (
                                <Link
                                    href={`/workshops/register?id=${workshop.id}`}
                                    className="group w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                                >
                                    <span>Register</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <button disabled className="w-full py-4 bg-neutral-800 text-neutral-500 font-bold uppercase tracking-wider rounded cursor-not-allowed border border-white/5 flex items-center justify-center gap-2">
                                    <X className="w-4 h-4" /> Protocol Closed
                                </button>
                            )}

                            {/* Footer Security Text */}
                            <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] text-neutral-600 font-mono uppercase">
                                <div className="w-1.5 h-1.5 bg-green-900 rounded-full animate-pulse" />
                                SECURE_SSL_ENCRYPTED_CONNECTION
                            </div>
                        </div>

                        {/* Instructors Section (UPDATED FOR MULTIPLE) */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-500" /> Instructors
                            </h4>

                            {instructorsList.map((inst: any, idx: number) => (
                                <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                            <Image src={inst.image} alt={inst.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{inst.name}</div>
                                            <div className="text-xs text-blue-400 font-mono">{inst.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed italic">
                                        "{inst.bio}"
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            {/* --- REUSED MODAL --- */}
            <RegistrationModal
                workshop={isModalOpen ? workshop : null}
                onClose={() => setIsModalOpen(false)}
            />

        </main>
    );
}