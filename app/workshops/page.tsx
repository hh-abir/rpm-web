"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight, X, CheckCircle, Cpu, Archive } from "lucide-react";
import Image from "next/image";

// --- Types ---
type Workshop = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    capacity: string;
    status: "UPCOMING" | "COMPLETED";
    tags: string[];
};

// --- Mock Data ---
const workshops: Workshop[] = [
    {
        id: "WS-2025-01",
        title: "Advanced Autonomous Navigation",
        date: "Oct 15, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "UB20405 - Robotics Lab",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        description: "Deep dive into SLAM algorithms and path planning for rover systems using ROS 2. Prerequisites: Python & Basic Linux.",
        capacity: "30 Seats",
        status: "UPCOMING",
        tags: ["ROS 2", "SLAM", "Python"],
    },
    {
        id: "WS-2025-02",
        title: "PCB Design with Altium",
        date: "Nov 02, 2025",
        time: "2:00 PM - 6:00 PM",
        location: "Makers Lab",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        description: "Learn industry-standard PCB design techniques, from schematic capture to routing and manufacturing file generation.",
        capacity: "25 Seats",
        status: "UPCOMING",
        tags: ["Hardware", "Altium", "Electronics"],
    },
    {
        id: "WS-2024-05",
        title: "Intro to Computer Vision",
        date: "Aug 10, 2024",
        time: "11:00 AM",
        location: "UB2 Auditorium",
        image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop",
        description: "A beginner-friendly workshop covering OpenCV basics, image processing filters, and object detection using YOLO.",
        capacity: "50 Seats",
        status: "COMPLETED",
        tags: ["AI", "OpenCV", "Vision"],
    },
    {
        id: "WS-2024-03",
        title: "Microcontroller Interfacing",
        date: "May 20, 2024",
        time: "3:00 PM",
        location: "Electronics Lab",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2070&auto=format&fit=crop",
        description: "Hands-on session with STM32 and Arduino. learned about GPIO, I2C, SPI, and UART protocols.",
        capacity: "40 Seats",
        status: "COMPLETED",
        tags: ["Embedded", "C++", "STM32"],
    },
];

export default function WorkshopsPage() {
    const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

    const upcomingWorkshops = workshops.filter((w) => w.status === "UPCOMING");
    const pastWorkshops = workshops.filter((w) => w.status === "COMPLETED");

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
            {/* Background Grid */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* --- HERO HEADER --- */}
                <div className="mb-20 pt-10 border-b border-white/10 pb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                            <Cpu className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="font-mono text-sm text-blue-400 tracking-widest uppercase">
                            Training Modules
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Skill Acquisition <br className="hidden md:block" /> & <span className="text-neutral-500">Technical Workshops.</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        Hands-on training sessions led by RPM researchers. Elevate your engineering capabilities through rigorous, project-based learning.
                    </p>
                </div>

                {/* --- UPCOMING WORKSHOPS (ACTIVE) --- */}
                <section className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-sm" />
                            Active Operations
                        </h2>
                        <span className="text-xs font-mono text-green-500 animate-pulse">● LIVE REGISTRATION</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingWorkshops.map((workshop) => (
                            <UpcomingCard
                                key={workshop.id}
                                workshop={workshop}
                                onRegister={() => setSelectedWorkshop(workshop)}
                            />
                        ))}
                    </div>
                </section>

                {/* --- PAST WORKSHOPS (ARCHIVE) --- */}
                <section>
                    <div className="flex items-center gap-3 mb-8 opacity-70">
                        <Archive className="w-5 h-5 text-neutral-500" />
                        <h2 className="text-xl font-bold text-neutral-400">Archived Logs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pastWorkshops.map((workshop) => (
                            <ArchiveCard key={workshop.id} workshop={workshop} />
                        ))}
                    </div>
                </section>

            </div>

            {/* --- REGISTRATION MODAL --- */}
            <RegistrationModal
                workshop={selectedWorkshop}
                onClose={() => setSelectedWorkshop(null)}
            />
        </main>
    );
}

// =========================================================================
// COMPONENT: Upcoming Workshop Card (Big, Interactive)
// =========================================================================
function UpcomingCard({ workshop, onRegister }: { workshop: Workshop; onRegister: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500"
        >
            {/* Image Header */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image src={workshop.image} alt={workshop.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                {/* ID Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-mono text-white">
                    {workshop.id}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                    {workshop.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {workshop.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {workshop.description}
                </p>

                {/* Meta Data Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-500 mb-8 border-y border-white/5 py-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neutral-400" /> {workshop.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-400" /> {workshop.time}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neutral-400" /> {workshop.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-neutral-400" /> {workshop.capacity}
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={onRegister}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-bold uppercase tracking-wider rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                    Register Now <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}

// =========================================================================
// COMPONENT: Archive Workshop Card (Small, Grayscale)
// =========================================================================
function ArchiveCard({ workshop }: { workshop: Workshop }) {
    return (
        <div className="flex gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
            <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden bg-neutral-800">
                <Image src={workshop.image} alt={workshop.title} fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            </div>
            <div>
                <h4 className="text-sm font-bold text-neutral-300 group-hover:text-white mb-1 leading-tight">
                    {workshop.title}
                </h4>
                <p className="text-xs text-neutral-600 mb-2">{workshop.date}</p>
                <span className="inline-block px-2 py-0.5 bg-neutral-800 text-neutral-500 text-[9px] rounded uppercase font-mono border border-white/5">
                    COMPLETED
                </span>
            </div>
        </div>
    );
}

// =========================================================================
// COMPONENT: Registration Modal (Dialog)
// =========================================================================
function RegistrationModal({ workshop, onClose }: { workshop: Workshop | null; onClose: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API Call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {workshop && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Registration Protocol</h3>
                                <p className="text-xs text-neutral-500 font-mono mt-1">ID: {workshop.id}</p>
                            </div>
                            <button onClick={onClose} className="p-1 hover:text-red-400 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-neutral-400">FULL_NAME</label>
                                        <input required type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-mono text-neutral-400">STUDENT_ID</label>
                                            <input required type="text" placeholder="xx221xxx" className="w-full bg-black border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-mono text-neutral-400">DEPARTMENT</label>
                                            <input required type="text" placeholder="CSE" className="w-full bg-black border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-neutral-400">EMAIL_ADDRESS</label>
                                        <input required type="email" placeholder="john@bracu.ac.bd" className="w-full bg-black border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>Processing <span className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent" /></>
                                            ) : "Confirm Registration"}
                                        </button>
                                        <p className="text-[10px] text-center text-neutral-600 mt-3 font-mono">
                                            By clicking confirm, you agree to the club's attendance policy.
                                        </p>
                                    </div>
                                </form>
                            ) : (
                                // SUCCESS STATE
                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Registration Confirmed</h3>
                                    <p className="text-neutral-400 text-sm max-w-xs mx-auto mb-6">
                                        You have been added to the roster for <strong>{workshop.title}</strong>. A confirmation email has been sent to your inbox.
                                    </p>
                                    <button onClick={onClose} className="px-6 py-2 border border-white/10 rounded hover:bg-white/5 text-sm transition-colors">
                                        Close Protocol
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}