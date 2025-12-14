"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { LogOut, LayoutDashboard, FileText, Users, Settings, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- COMPONENTS ---
import NavButton from "./components/NavButton";
import LoadingScreen from "./components/LoadingScreen";
import RegistrationsView from "./components/RegistrationsView";
import { MembersView, SettingsView, OverviewView } from "./components/PlaceholderViews";
import { ViewState } from "./types";

export default function AdminDashboard() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [currentView, setCurrentView] = useState<ViewState>("OVERVIEW");

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth");
        }
    }, [session, isPending, router]);

    if (isPending || !session) return <LoadingScreen />;

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20 pb-10 selection:bg-red-500/30">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-[1600px] mx-auto px-4 relative z-10 h-[calc(100vh-120px)] flex gap-6">

                {/* --- LEFT SIDEBAR (NAVIGATION) --- */}
                <aside className="w-64 flex-shrink-0 bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-white/10 bg-white/[0.02]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden relative">
                                <Image src={session.user.image || "https://github.com/shadcn.png"} alt="Admin" fill className="object-cover" />
                            </div>
                            <div className="overflow-hidden">
                                <div className="text-sm font-bold text-white truncate">{session.user.name}</div>
                                <div className="text-[10px] text-red-400 font-mono tracking-wider uppercase">High Command</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-mono">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            SECURE_UPLINK
                        </div>
                    </div>

                    <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                        <NavButton active={currentView === "OVERVIEW"} onClick={() => setCurrentView("OVERVIEW")} icon={LayoutDashboard} label="Mission Overview" />
                        <NavButton active={currentView === "REGISTRATIONS"} onClick={() => setCurrentView("REGISTRATIONS")} icon={FileText} label="Workshop Responses" badge="LIVE" />
                        <NavButton active={currentView === "MEMBERS"} onClick={() => setCurrentView("MEMBERS")} icon={Users} label="Operative Database" />
                        <NavButton active={currentView === "SETTINGS"} onClick={() => setCurrentView("SETTINGS")} icon={Settings} label="System Config" />
                    </nav>

                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={() => authClient.signOut().then(() => router.push("/"))}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-colors"
                        >
                            <LogOut className="w-4 h-4" /> Terminate
                        </button>
                    </div>
                </aside>

                {/* --- RIGHT CONTENT AREA --- */}
                <section className="flex-grow bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col relative">
                    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase">
                            <span>ROOT</span> <ChevronRight className="w-3 h-3" /> <span>ADMIN</span> <ChevronRight className="w-3 h-3" /> <span className="text-white font-bold">{currentView}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-neutral-600">
                            <span>CPU_LOAD: 12%</span><span>MEM_USAGE: 450MB</span>
                        </div>
                    </header>

                    <div className="flex-grow overflow-y-auto custom-scrollbar p-6 relative">
                        {currentView === "OVERVIEW" && <OverviewView />}
                        {currentView === "REGISTRATIONS" && <RegistrationsView />}
                        {currentView === "MEMBERS" && <MembersView />}
                        {currentView === "SETTINGS" && <SettingsView />}
                    </div>
                </section>

            </div>
        </main>
    );
}