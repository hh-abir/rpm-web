// components/workshops/ActiveWorkshopCard.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Workshop } from "@/lib/workshop-data";

export default function ActiveWorkshopCard({ workshop, onRegister }: { workshop: Workshop; onRegister: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500"
        >
            {/* More compact image area (h-48 instead of h-64) */}
            <div className="relative h-48 w-full overflow-hidden shrink-0">
                <Image src={workshop.image} alt={workshop.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-white">
                    {workshop.id}
                </div>

                {/* Status Tag Overlay */}
                <div className="absolute bottom-3 right-3 flex gap-1">
                    {workshop.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] uppercase font-bold px-1.5 py-0.5 bg-blue-600 text-white rounded shadow-lg">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors leading-tight">
                    {workshop.title}
                </h3>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] font-mono text-neutral-400 mb-4 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-blue-500" /> {workshop.date}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-blue-500" /> {workshop.time}</div>
                    <div className="flex items-center gap-1.5 col-span-2"><MapPin className="w-3 h-3 text-blue-500" /> {workshop.location}</div>
                </div>

                <p className="text-neutral-500 text-xs mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {workshop.description}
                </p>

                <button
                    onClick={onRegister}
                    className="w-full mt-auto flex items-center justify-center gap-2 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                    Initialize Protocol <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </motion.div>
    );
}