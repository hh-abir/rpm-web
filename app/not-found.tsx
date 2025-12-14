"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function NotFound() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-red-500/30">

            {/* Background Noise & Grid */}
            <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Red Alert Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-lg w-full px-6 text-center">

                {/* Error Code */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <div className="flex items-center gap-3 px-4 py-2 bg-red-950/20 border border-red-500/30 rounded-full">
                        <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-red-400 tracking-widest uppercase">
                            System Critical Error
                        </span>
                    </div>
                </motion.div>

                {/* The Big 404 */}
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 tracking-tighter mb-2"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="h-px w-24 bg-red-500/50 mx-auto mb-8"
                />

                {/* Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4 mb-10"
                >
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                        Sector Not Found
                    </h2>
                    <p className="text-neutral-500 font-mono text-sm leading-relaxed">
                        The requested asset could not be located in the RPM database.
                        It may have been <span className="text-red-400 bg-red-900/10 px-1 rounded">REDACTED</span>, moved, or never existed.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 border border-white/10 rounded hover:bg-white/5 text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                    >
                        <Home className="w-4 h-4" /> Return to Base
                    </Link>
                </motion.div>

                {/* Terminal Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-600"
                >
                    <Terminal className="w-3 h-3" />
                    <span>ERR_CODE: ASSET_MISSING // TIMESTAMP: {time}</span>                </motion.div>

            </div>
        </main>
    );
}