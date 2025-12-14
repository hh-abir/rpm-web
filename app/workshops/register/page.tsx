"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { WORKSHOP_DATA } from "@/lib/workshop-data";

// --- FORM COMPONENT (Wrapped in Suspense below) ---
function RegistrationForm() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // 1. Get the 'id' from the URL (e.g., ?id=WS-2025-01)
    const initialId = searchParams.get("id") || "";

    // 2. State for the form
    const [selectedWorkshopId, setSelectedWorkshopId] = useState(initialId);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Filter only upcoming workshops for the dropdown
    const activeWorkshops = WORKSHOP_DATA.filter(w => w.status === "UPCOMING");

    // Update state if URL changes (optional, but good practice)
    useEffect(() => {
        if (initialId) {
            setSelectedWorkshopId(initialId);
        }
    }, [initialId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API Call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    // --- SUCCESS VIEW ---
    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Registration Confirmed</h1>
                <p className="text-neutral-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Your credentials have been verified and added to the roster for the selected module.
                    <br /><br />
                    <span className="text-sm font-mono text-neutral-500">CONFIRMATION_PACKET_SENT_TO_EMAIL</span>
                </p>
                <div className="flex gap-4">
                    <button onClick={() => { setIsSuccess(false); router.push('/workshops'); }} className="px-8 py-3 bg-white text-black font-bold uppercase text-xs tracking-wider rounded hover:bg-neutral-200 transition-colors">
                        Return to Base
                    </button>
                    <button onClick={() => { setIsSuccess(false); setIsSubmitting(false); }} className="px-8 py-3 border border-white/10 text-white font-bold uppercase text-xs tracking-wider rounded hover:bg-white/5 transition-colors">
                        Register Another
                    </button>
                </div>
            </div>
        );
    }

    // --- FORM VIEW ---
    return (
        <div className="max-w-3xl mx-auto">

            {/* Header */}
            <div className="mb-10 border-b border-white/10 pb-6">
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-blue-500" />
                    Secure Registration Protocol
                </h1>
                <p className="text-neutral-400">
                    Complete the dossier below to secure your seat. All fields marked with * are mandatory for clearance.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* 0. WORKSHOP SELECTION (Auto-selected or Manual) */}
                <div className="p-6 bg-blue-900/10 border border-blue-500/30 rounded-xl">
                    <label className="block text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">Target Module (Auto-Detected) *</label>
                    <div className="relative">
                        <select
                            required
                            value={selectedWorkshopId}
                            onChange={(e) => setSelectedWorkshopId(e.target.value)}
                            className="w-full appearance-none bg-[#050505] border border-blue-500/30 rounded px-4 py-3 text-sm text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        >
                            <option value="" disabled>-- Select a Workshop --</option>
                            {activeWorkshops.map((w) => (
                                <option key={w.id} value={w.id}>
                                    {w.title} (ID: {w.id})
                                </option>
                            ))}
                        </select>
                        {/* Dropdown Arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-500">
                            <Cpu className="w-4 h-4" />
                        </div>
                    </div>
                    {selectedWorkshopId && (
                        <div className="mt-2 flex items-center gap-2 text-[10px] text-green-400 font-mono">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            SLOT AVAILABLE FOR REGISTRATION
                        </div>
                    )}
                </div>

                {/* 1. Identity */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[01] PERSONAL_IDENTITY</span></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput label="Full Name" placeholder="Ex: Adnan Sami" />
                        <FormInput label="Student ID" placeholder="Ex: 22101xxx" />
                        <FormInput label="Mobile No" placeholder="01xxxxxxxxx" type="tel" />
                        <FormInput label="BracU Semester" placeholder="Ex: Spring 2025" />
                    </div>
                </div>

                {/* 2. Contact */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[02] COMMS_UPLINK</span></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput label="Personal Gmail" placeholder="example@gmail.com" type="email" />
                        <FormInput label="G-Suite Email" placeholder="id@g.bracu.ac.bd" type="email" />
                        <div className="col-span-1 md:col-span-2"><FormInput label="Facebook ID Link" placeholder="https://facebook.com/profile..." /></div>
                    </div>
                </div>

                {/* 3. ROBU Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[03] ROBU_CLEARANCE</span></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormSelect label="ROBU Department" options={["RPM", "SP", "HR", "EM", "IT", "F&M", "A&D", "E&P"]} />
                        <FormSelect label="ROBU Designation" options={["DADS", "Executive", "Junior Executive", "Apprentice", "General Member", "Probationary Member"]} />
                    </div>
                </div>

                {/* 4. Hardware/Misc */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[04] SYSTEM_CHECK</span></div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Do you have a laptop? *</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer p-3 border border-white/10 rounded w-full hover:bg-white/5 transition-colors">
                                <input type="radio" name="laptop" value="yes" required className="accent-blue-500" /> Yes, I will bring it.
                            </label>
                            <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer p-3 border border-white/10 rounded w-full hover:bg-white/5 transition-colors">
                                <input type="radio" name="laptop" value="no" required className="accent-blue-500" /> No, I don't.
                            </label>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Expectations *</label>
                        <textarea required rows={3} className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-neutral-700 focus:border-blue-500 focus:outline-none transition-all resize-none" />
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-white/10">
                    <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                        {isSubmitting ? <>Encrypting & Sending <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" /></> : <>Initialize Registration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                    </button>
                </div>
            </form>
        </div>
    );
}

// --- HELPER COMPONENTS ---
const FormInput = ({ label, placeholder, type = "text", required = true }: any) => (
    <div className="space-y-1">
        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{label} {required && "*"}</label>
        <input required={required} type={type} placeholder={placeholder} className="w-full bg-[#050505] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all" />
    </div>
);

const FormSelect = ({ label, options }: any) => (
    <div className="space-y-1">
        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{label} *</label>
        <div className="relative">
            <select required defaultValue="" className="w-full appearance-none bg-[#050505] border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all cursor-pointer">
                <option value="" disabled>Select Option</option>
                {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                <ArrowRight className="w-3 h-3 rotate-90" />
            </div>
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
export default function RegistrationPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 selection:bg-blue-500/30">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Breadcrumb */}
                <Link href="/workshops" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-blue-400 transition-colors uppercase tracking-wider mb-8">
                    <ArrowLeft className="w-3 h-3" /> Abort / Return to List
                </Link>

                {/* Suspense Wrapper is crucial for useSearchParams */}
                <Suspense fallback={<div className="text-center text-neutral-500 font-mono py-20">INITIALIZING FORM PROTOCOLS...</div>}>
                    <RegistrationForm />
                </Suspense>
            </div>
        </main>
    );
}