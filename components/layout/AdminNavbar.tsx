"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldAlert, LogOut, Activity, Lock, ChevronLeft } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#080808] border-b border-red-900/30 flex items-center justify-between px-6 shadow-2xl shadow-black">

            {/* Background Hazard Stripes (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />

            {/* --- LEFT: IDENTITY --- */}
            <div className="flex items-center gap-6 relative z-10">

                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-red-950/20 border border-red-500/20 flex items-center justify-center">
                        <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-white tracking-widest uppercase">
                            Admin<span className="text-red-500">Console</span>
                        </h1>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-red-500" />
                            <span className="text-[9px] font-mono text-red-400/80 tracking-wider">RESTRICTED_ACCESS</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-white/10 hidden md:block" />

                {/* User Info (Minimal) */}
                {session && (
                    <div className="hidden md:flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <span className="text-neutral-600">OPERATOR:</span>
                        <span className="text-white uppercase">{session.user.name}</span>
                    </div>
                )}
            </div>


            {/* --- CENTER: SYSTEM STATUS --- */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 text-[10px] font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-neutral-600" />
                    <span>CONNECTION_SECURE</span>
                </div>
                <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-neutral-600" />
                    <span>SYS_TIME: <span className="text-neutral-300">{time}</span></span>
                </div>
            </div>


            {/* --- RIGHT: ACTIONS --- */}
            <div className="flex items-center gap-4 relative z-10">

                <Link
                    href="/"
                    className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors"
                >
                    <ChevronLeft className="w-3 h-3" /> Return to Public Site
                </Link>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-950/10 hover:bg-red-900/30 border border-red-500/20 rounded text-xs font-bold text-red-400 uppercase tracking-wider transition-colors"
                >
                    <LogOut className="w-3 h-3" /> Terminate
                </button>
            </div>

        </header>
    );
}