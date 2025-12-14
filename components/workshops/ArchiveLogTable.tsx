// components/workshops/ArchiveLogTable.tsx
"use client";
import React from "react";
import { Archive, Calendar, CheckCircle } from "lucide-react";
import { Workshop } from "@/lib/workshop-data";

export default function ArchiveLogTable({ workshops }: { workshops: Workshop[] }) {
    return (
        <div className="w-full overflow-hidden border border-white/10 rounded-xl bg-white/[0.02]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/10 bg-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                <div className="col-span-2 md:col-span-1">ID</div>
                <div className="col-span-6 md:col-span-5">Module Name</div>
                <div className="hidden md:block col-span-2">Execution Date</div>
                <div className="hidden md:block col-span-2">Tags</div>
                <div className="col-span-4 md:col-span-2 text-right">Status</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/5">
                {workshops.map((workshop) => (
                    <div key={workshop.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-white/5 transition-colors group">

                        {/* ID */}
                        <div className="col-span-2 md:col-span-1 text-[10px] font-mono text-neutral-600 group-hover:text-blue-500 transition-colors">
                            {workshop.id}
                        </div>

                        {/* Title */}
                        <div className="col-span-6 md:col-span-5">
                            <h4 className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors truncate">
                                {workshop.title}
                            </h4>
                            <p className="md:hidden text-[10px] text-neutral-600 mt-1">{workshop.date}</p>
                        </div>

                        {/* Date (Desktop) */}
                        <div className="hidden md:flex col-span-2 text-xs text-neutral-500 items-center gap-2">
                            <Calendar className="w-3 h-3 opacity-50" />
                            {workshop.date}
                        </div>

                        {/* Tags (Desktop) */}
                        <div className="hidden md:flex col-span-2 gap-1 flex-wrap">
                            {workshop.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-neutral-800 border border-white/5 rounded text-neutral-400">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="col-span-4 md:col-span-2 flex justify-end">
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span className="text-[9px] font-bold text-green-500 uppercase">Completed</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Pagination (Visual Only) */}
            <div className="px-6 py-3 bg-white/[0.02] border-t border-white/5 text-[10px] font-mono text-neutral-600 text-center">
                END OF LOGS // ARCHIVE RETRIEVAL COMPLETE
            </div>
        </div>
    );
}