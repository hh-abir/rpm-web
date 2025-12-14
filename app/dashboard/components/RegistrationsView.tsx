"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, FileSpreadsheet, Loader2, User, Eye, X } from "lucide-react";
import { RegistrationLog } from "../types";
import { WORKSHOP_DATA } from "@/lib/workshop-data";

export default function RegistrationsView() {
    const [logs, setLogs] = useState<RegistrationLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [workshopFilter, setWorkshopFilter] = useState("ALL");
    const [selectedLog, setSelectedLog] = useState<RegistrationLog | null>(null);

    // Fetch Logic
    useEffect(() => {
        fetch("/api/registrations")
            .then(res => res.json())
            .then(data => {
                setLogs(data.registrations || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Filter Logic
    const filtered = logs.filter(l => {
        const matchesSearch = l.fullName?.toLowerCase().includes(search.toLowerCase()) ||
            l.studentId?.includes(search) ||
            l.email?.toLowerCase().includes(search.toLowerCase());
        const matchesWorkshop = workshopFilter === "ALL" || l.workshopId === workshopFilter;
        return matchesSearch && matchesWorkshop;
    });

    // CSV Export Logic
    const downloadCSV = () => {
        if (filtered.length === 0) return;
        const headers = ["Timestamp", "Full Name", "Student ID", "Email", "Mobile", "Workshop", "Status", "Laptop", "Dept", "Semester"];
        const rows = filtered.map(l => [
            new Date(l.createdAt).toLocaleString(), `"${l.fullName}"`, l.studentId, l.email, l.mobile, `"${l.workshopName}"`, l.status, l.laptop, l.robuDept, l.semester
        ]);
        const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                <div className="flex gap-4 flex-grow">
                    <div className="relative flex-grow max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input type="text" placeholder="Search operatives..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-black border border-white/10 rounded px-10 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                    </div>
                    <select value={workshopFilter} onChange={(e) => setWorkshopFilter(e.target.value)} className="bg-black border border-white/10 rounded px-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none cursor-pointer max-w-xs truncate">
                        <option value="ALL">All Workshops</option>
                        {WORKSHOP_DATA.map(w => <option key={w.id} value={w.id}>{w.title}</option>)}
                    </select>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded bg-white/5 text-xs text-neutral-400 font-mono"><Filter className="w-3 h-3" /> {filtered.length}</div>
                    <button onClick={downloadCSV} className="flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 text-green-400 hover:bg-green-900/30 hover:text-green-300 rounded text-xs font-bold uppercase tracking-wider transition-colors"><FileSpreadsheet className="w-4 h-4" /> CSV</button>
                </div>
            </div>

            {/* Table */}
            <div className="flex-grow border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-black/40 border-b border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider sticky top-0 backdrop-blur-md z-10">
                    <div className="col-span-2">Timestamp</div>
                    <div className="col-span-3">Candidate</div>
                    <div className="col-span-3">Module</div>
                    <div className="col-span-2">Contact</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4"><Loader2 className="w-8 h-8 animate-spin text-neutral-600" /><span className="text-xs font-mono text-neutral-600">DECRYPTING LOGS...</span></div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-neutral-500 text-sm">No records found.</div>
                ) : (
                    <div className="divide-y divide-white/5 overflow-y-auto max-h-[600px] custom-scrollbar">
                        {filtered.map((log) => (
                            <div key={log._id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-white/5 transition-colors text-xs group">
                                <div className="col-span-2 font-mono text-neutral-500">{new Date(log.createdAt).toLocaleDateString()}</div>
                                <div className="col-span-3"><div className="font-bold text-white flex items-center gap-2"><User className="w-3 h-3 text-blue-500" /> {log.fullName}</div><div className="text-[10px] text-neutral-500 font-mono">{log.studentId}</div></div>
                                <div className="col-span-3 text-neutral-300 truncate">{log.workshopName}</div>
                                <div className="col-span-2 text-neutral-400 truncate">{log.email}</div>
                                <div className="col-span-2 flex justify-end gap-2">
                                    <button onClick={() => setSelectedLog(log)} className="flex items-center gap-1 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white rounded transition-colors"><Eye className="w-3 h-3" /> View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedLog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLog(null)} />
                    <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <div><h3 className="text-sm font-bold text-white uppercase tracking-wider">Entry Details</h3><p className="text-[10px] text-neutral-500 font-mono">ID: {selectedLog._id}</p></div>
                            <button onClick={() => setSelectedLog(null)} className="p-1 hover:text-red-400 transition-colors"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
                            <div className="p-4 border border-white/10 rounded bg-white/[0.02]"><h4 className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider border-b border-white/5 pb-2">Identity</h4><div className="grid grid-cols-2 gap-4 text-sm"><div><span className="text-neutral-500 text-xs block">Full Name</span>{selectedLog.fullName}</div><div><span className="text-neutral-500 text-xs block">Student ID</span>{selectedLog.studentId}</div><div><span className="text-neutral-500 text-xs block">Email</span>{selectedLog.email}</div><div><span className="text-neutral-500 text-xs block">Mobile</span>{selectedLog.mobile}</div><div><span className="text-neutral-500 text-xs block">Semester</span>{selectedLog.semester || "N/A"}</div><div><span className="text-neutral-500 text-xs block">G-Suite</span>{selectedLog.gsuite || "N/A"}</div></div></div>
                            <div className="p-4 border border-white/10 rounded bg-white/[0.02]"><h4 className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider border-b border-white/5 pb-2">Organization</h4><div className="grid grid-cols-2 gap-4 text-sm"><div><span className="text-neutral-500 text-xs block">Dept</span>{selectedLog.robuDept || "N/A"}</div><div><span className="text-neutral-500 text-xs block">Designation</span>{selectedLog.robuDesignation || "N/A"}</div></div></div>
                            <div className="p-4 border border-white/10 rounded bg-white/[0.02]"><h4 className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-wider border-b border-white/5 pb-2">Assessment</h4><div className="space-y-4 text-sm"><div><span className="text-neutral-500 text-xs block mb-1">Laptop</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${selectedLog.laptop === 'Yes' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>{selectedLog.laptop || "N/A"}</span></div><div><span className="text-neutral-500 text-xs block mb-1">Expectations</span><p className="text-neutral-300 bg-black/30 p-2 rounded border border-white/5 text-xs">{selectedLog.expectations}</p></div>{selectedLog.remarks && <div><span className="text-neutral-500 text-xs block mb-1">Remarks</span><p className="text-neutral-300 bg-black/30 p-2 rounded border border-white/5 text-xs">{selectedLog.remarks}</p></div>}</div></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}