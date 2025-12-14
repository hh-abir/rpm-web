"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Download, ExternalLink, MapPin } from "lucide-react";

// --- Data Types ---
type Event = {
    date: string;
    title: string;
    location: string;
    status: "UPCOMING" | "COMPLETED";
};

type Paper = {
    id: string;
    title: string;
    conference: string;
    year: string;
    link: string;
};

// --- Mock Data ---
const events: Event[] = [
    { date: "2024-10-15", title: "ROS 2 Navigation Workshop", location: "UB20405", status: "UPCOMING" },
    { date: "2024-11-02", title: "National Robotics Hackathon", location: "Auditorium", status: "UPCOMING" },
    { date: "2024-09-10", title: "Intro to PCB Design", location: "Makers Lab", status: "COMPLETED" },
];

const papers: Paper[] = [
    { id: "PUB-88", title: "Adaptive Slam in Dynamic Environments", conference: "IEEE ICRA 2024", year: "2024", link: "#" },
    { id: "PUB-87", title: "Swarm Coordination using Behavior Trees", conference: "IROS 2023", year: "2023", link: "#" },
    { id: "PUB-86", title: "Low-cost Lidar Sensors for Rovers", conference: "Tencon", year: "2023", link: "#" },
    { id: "PUB-85", title: "Computer Vision for Weed Detection", conference: "ICCIT", year: "2022", link: "#" },
];

export default function IntelligenceSection() {
    return (
        <section className="relative w-full py-24 px-4 bg-[#050505] border-t border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* --- LEFT COLUMN: OPERATIONS (Events) --- */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <h3 className="text-xl font-bold text-white tracking-wide">FIELD OPERATIONS</h3>
                    </div>

                    <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline Node */}
                                <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 ${event.status === 'UPCOMING' ? 'border-blue-500 bg-[#050505] shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-neutral-700 bg-neutral-800'}`} />

                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-blue-400 mb-1">{event.date} // [{event.status}]</span>
                                    <h4 className="text-lg text-white font-medium hover:text-blue-200 transition-colors cursor-pointer">{event.title}</h4>
                                    <div className="flex items-center gap-2 mt-2 text-neutral-500 text-sm">
                                        <MapPin className="w-3 h-3" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT COLUMN: INTELLIGENCE (Papers) --- */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <h3 className="text-xl font-bold text-white tracking-wide">RESEARCH INTELLIGENCE</h3>
                    </div>

                    <div className="bg-neutral-900/20 border border-white/10 rounded-lg overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                            <div className="col-span-2">ID</div>
                            <div className="col-span-7">Title / Venue</div>
                            <div className="col-span-3 text-right">Access</div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-white/5">
                            {papers.map((paper, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group"
                                >
                                    <div className="col-span-2 text-xs font-mono text-neutral-500 group-hover:text-blue-400">{paper.id}</div>
                                    <div className="col-span-7">
                                        <div className="text-sm text-neutral-200 font-medium truncate pr-4">{paper.title}</div>
                                        <div className="text-xs text-neutral-500 mt-0.5">{paper.conference} • {paper.year}</div>
                                    </div>
                                    <div className="col-span-3 flex justify-end">
                                        <button className="p-2 hover:bg-blue-500/20 rounded text-neutral-400 hover:text-blue-400 transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Table Footer */}
                        <div className="p-3 bg-white/5 border-t border-white/10 text-center">
                            <a href="/papers" className="text-xs font-mono text-blue-400 hover:text-white transition-colors flex items-center justify-center gap-2">
                                ACCESS FULL ARCHIVE <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}